import {addDoc, collection, updateDoc, doc, writeBatch, getDocs, query , where, documentId} from 'firebase/firestore'
import {db} from '../../services/firebase/index'
import {useNotification} from '../../notification/Notification'
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import app from '../../services/firebase/index'
import{getAuth, signOut} from 'firebase/auth'
import '../CheckOut/CheckOut.css'


const CheckOut = () =>{
    const[loading, setLoading] = useState(false)
    const {cart, totalQuantity, clearCart, getTotal,getQuantity} = useContext(CartContext)

    const total = getTotal()

    const setNotification = useNotification()
  
    const auth = getAuth(app)

    const valorInicial = {
        name: '',
        email:'',
        phone:'',
        address: ''
    }

 const [user, setUser] = useState(valorInicial)

 const capturarInputs = (e) => {
   const {name, value} = e.target;
   setUser({...user,[name]: value})

 }

 const guardarDatos = async(e) => {
    e.preventDefault();
    console.log(user);
    setUser({...valorInicial})

 }

   const handleCreateOrder = () => {

    
   
     setLoading(true)


     const objOrder = {
          buyer: user,
         items: cart,
         total: total,
     }

     

     const batch = writeBatch(db)

     const ids = cart.map(prod => prod.id)

     const outOfStock = []

     const collectionRef = collection(db, 'productos')

     getDocs(query(collectionRef, where(documentId(), 'in', ids )))
         .then(response => {
             response.docs.forEach(doc => {
                 const dataDoc = doc.data()

                 const prod = cart.find(prod => prod.id === doc.id)
                 const prodQuantity = prod.quantity

                 if(dataDoc.stock >= prodQuantity ){
                     batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity } )
                 }else {
                     outOfStock.push({id:doc.id, ...dataDoc})
                 }
             } )
         }).then(() => {
             if(outOfStock.length === 0){
                 const collectionRef = collection(db, 'orders') 

                  return addDoc(collectionRef, objOrder)
             }else {
                 return Promise.reject({type: 'out_of_stock', productos: outOfStock })
             }
         }).then(({id})=>{
             batch.commit()
             clearCart()
             setNotification('success',`Su orden se generó correctamente. El id de su orden es: ${id} `)
         }).catch(error =>{
             if(error.type === 'out_of_stock'){
                 setNotification('error','Hay productos que no tienen stock')
             }else {
                 console.log(error)
             }
         }).finally(() => {
             setLoading(false)
         })

  
 }

 return (
    <>
        <h1>Completa los datos</h1>
                <form  onSubmit={guardarDatos}>
                <div className ='form'>
                    <div>
                        <label className='label'>Nombre</label>
                        <input className="input"type="text" name='name' placeholder='Ingrese su nombre' onChange={capturarInputs} value={user.name}/>
                    </div>
                    <div>
                        <label className='label'>Email</label>
                        <input className="input" type="text" name='email' placeholder='Ingrese su Email' onChange={capturarInputs} value={user.email} />
                    </div>
                    <div>
                        <label className='label'>Teléfono</label>
                        <input className="input" type="text" name='phone' placeholder='Ingrese su telefono' onChange={capturarInputs} value={user.phone}/>
                    </div>
                    <div>
                        <label className='label'>Dirección</label>
                        <input className="input" type="text" name='address' placeholder='Ingrese su dirección' onChange={capturarInputs} value={user.address}/>
                    </div>

                     <button  className="boton__cantidad"onClick={handleCreateOrder} >Generar Orden</button>
                     </div>
                </form>
      
 
    </>
 )
}

export default CheckOut