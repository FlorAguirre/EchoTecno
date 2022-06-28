import carrito from '../../assets/img/2561279_cart_shopping_icon.png'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { useCart } from '../../context/CartContext';
import { Link } from "react-router-dom"

const CartWidget = () => {

   

    const {getCartQuantity, totalQuantity } = useContext(CartContext)
    

    return (
        <div className='carrito__button carrito'>
            <Link to ='/cart'>
            <img src={carrito} className='carrito__imagen'alt='cart-widget'/>
            
          
          </Link>
           {totalQuantity} 
        </div>
    )
}

export default CartWidget