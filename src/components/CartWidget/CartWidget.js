import carrito from '../../assets/img/2561279_cart_shopping_icon.png'

const CartWidget = () => {
    return (
        <div className='carrito__button'>
            <img src={carrito} className='carrito' alt='cart-widget'/>
            0
        </div>
    )
}

export default CartWidget