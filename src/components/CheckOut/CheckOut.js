import {addDoc, collection, updateDoc, doc, writeBatch, getDocs, query , where, documentId} from 'firebase/firestore'
import {db} from '../../services/firebase/index'
import { getProductosById } from "../../asyncmock"
import {useNotification} from '../../notification/Notification'
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"


const CheckOut = () =>{
    const[loading, setLoading] = useState(false)
    const {cart, totalQuantity, clearCart, getTotal,getQuantity} = useContext(CartContext)

    const total = getTotal()

    const setNotification = useNotification()
  


   const handleCreateOrder = () => {

  
    /*  console.log('crear orden') */
     setLoading(true)


     const objOrder = {
         buyer:{
             name: '',
             email:'',
             phone:'',
             address: ''
         },
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

    /*  const collectionRef = collection (db, 'orders')

     addDoc(collectionRef, objOrder).then(({id}) =>{
         console.log(id) 
     }) */
 }

 return (
    <>
        <form>
        
        </form>
    <button onClick={handleCreateOrder}>Generar Orden</button>
    </>
 )
}

export default CheckOut