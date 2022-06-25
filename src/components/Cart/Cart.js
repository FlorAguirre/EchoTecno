import CartItem from "../CartItem/CartItem"
import CartContext from "../../context/CartContext"
import { useContext } from "react"
import {Link} from 'react-router-dom'
import { CartItemMsg } from "../CartItem/CartItem";

const Cart = () => {
    const {cart, totalQuantity } = useContext(CartContext)


    return (
        <>
            {totalQuantity === 0
                ? <CartItemMsg />
                : cart.map(cart=><CartItem key= {cart.id} {...cart}/>)
            }
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