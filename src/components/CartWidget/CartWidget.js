import carrito from '../../assets/img/2561279_cart_shopping_icon.png'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const {getCartQuantity} = useContext(CartContext)
    const totalQuantity = getCartQuantity()

    return (
        <div className='carrito__button carrito'>
            <img src={carrito} className='carrito__imagen'alt='cart-widget'/>
           {totalQuantity} 
        </div>
    )
}

export default CartWidget