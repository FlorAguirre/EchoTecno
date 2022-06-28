import CartItem from "../CartItem/CartItem"
import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import {Link} from 'react-router-dom'
import {addDoc, collection, updateDoc, doc, writeBatch, getDocs, query , where, documentId} from 'firebase/firestore'
import {db} from '../../services/firebase/index'
import { getProductosById } from "../../asyncmock"
import {useNotification} from '../../notification/Notification'

const Cart = () => {
    const[loading, setLoading] = useState(false)
    const {cart, totalQuantity, clearCart, getTotal,getQuantity} = useContext(CartContext)

    const total = getTotal()

    const setNotification = useNotification()

 
/*     const handleUpdateStock = () => {
        const docRef =  doc(db, 'productos', 'OZ1ELxIi2x8LLl32fDF6')

        updateDoc(docRef, { stock:1000 })
    } */

    if(loading) {
        return <h1> Se esta procesando su compra</h1>
    }

    
    if(getQuantity() === 0) {
        return (
            <div className='texto'>
            <h1>No hay productos agregados aun. </h1>
            <Link to="/" >Hace click aquí para acceder a los productos.</Link>
        </div>
        )
    }


    return (
        <>
        <h1>Cart</h1>
            {cart.map(cart=>
                <CartItem key= {cart.id}{...cart}/>)}
            
            <h3>Total: ${total}</h3>
           <button onClick={()=>clearCart()}>Limpiar Carrito</button>
           <Link to='/checkout'>
           <button>Procesar Compra</button> 
        {/*    <CheckOut /> */}
           </Link>
        {/*   <button onClick={handleCreateOrder}>Generar Orden</button>   */}
         {/*   <button onClick={handleUpdateStock}>Sumar Stock</button> */}
        </>
    )

    /* if(quantAdded === 0) {
        return  <ul>
           
            {cart.map(cart=><CartItem key= {cart.id} {...cart}/>)}
             
        </ul>
    }else {
       
            <>
        <h1>No hay productos agregados</h1>
        <Link to='/'><h3>Por favor haz click aquí para ver los productos</h3></Link>   
        </> 
    } */
}
export default Cart