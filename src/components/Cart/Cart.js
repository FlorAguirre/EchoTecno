import CartItem from "../CartItem/CartItem"
import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import {Link} from 'react-router-dom'
import {useNotification} from '../../notification/Notification'

const Cart = () => {
    const[loading, setLoading] = useState(false)
    const {cart, clearCart, getTotal,getQuantity} = useContext(CartContext)

    const total = getTotal()




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
        <h1>Carrito</h1>
            {cart.map(cart=>
                <CartItem key= {cart.id}{...cart}/>)}
            
            <h3>Total: ${total}</h3>
           <button className="boton__cantidad" onClick={()=>clearCart()}>Limpiar Carrito</button>
           <Link to='/checkout'>
           <button className="boton__cantidad">Procesar Compra</button> 
     
           </Link>
      
        </>
    )

  
}
export default Cart