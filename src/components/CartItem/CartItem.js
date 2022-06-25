import { useContext } from "react"
import CartContext from "../../context/CartContext";
import "./CartItem.css"

import { Link } from "react-router-dom";

export const CartItemMsg = () => {
    return (
        <div>
            <p>No hay productos agregados aun. </p>
            <Link to="/" >Hace click aquí para acceder a los productos.</Link>
        </div>
    )
}




const CartItem = () => {

    const { cart, getTotalPrice, removeItem, clearCart  } = useContext(CartContext)
   const cartItem = cart[0]
   console.log(cartItem.id);
    return (
            <div className="CartItem__div">
                <div  >
                    <table className="table">
                        <thead>
                            <tr className="CartItem__categorias">
                                <th scope="col">#</th>
                                <th scope="col">Productos</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Total</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="CartItem__categorias">
                                <th scope="row">1</th>
                                <td>{cartItem.name}</td>
                                <td>{cartItem.quantity}</td>
                                <td>{cartItem.price}</td>
                                <td>{getTotalPrice()}</td>
                                <td><button onClick={() => removeItem (cartItem.id)} >Eliminar item</button></td>
                            </tr>

                        </tbody>
                    </table>

                    <button onClick={() => clearCart ()}>VACIAR CARRITO</button>
                </div>
          
            </div>
    )

}
export default CartItem