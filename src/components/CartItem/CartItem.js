import { useContext } from "react"
import CartContext from "../../context/CartContext";
import "./CartItem.css"

import { Link } from "react-router-dom";

export const CartItemMsg = () => {
    return (
        <div className='texto'>
            <h1>No hay productos agregados aun. </h1>
            <Link to="/" >Hace click aquí para acceder a los productos.</Link>
        </div>
    )
}


const CartItem = ({ id, name, quantity, price,img }) => {

    const { cart, getTotalPrice, removeItem, clearCart  } = useContext(CartContext)
    const handleRemove = (id) => {
        removeItem(id)
    }
    return (
        <article className='CartItem__article'>
        <header className="HeaderCartItem">
            <h2 className="ItemHeaderCartItem">
              
                {name}
            </h2>
        </header>
        <section className='ContainerItemCartItem'>
            <p className="InfoCartItem">
                Cantidad: {quantity}
            </p>
            <p className="InfoCartItem">
                Precio : ${price}
            </p>
        </section>           
        <footer className='ItemFooterCartItem'>
             <p className="InfoCartItem">
                 Subtotal: ${price * quantity}
             </p>
             <button className='ButtonCartItem' onClick={() => handleRemove(id)}>X</button>
        </footer>    
        
        
    </article>
                
              
          
            
    )

}
export default CartItem