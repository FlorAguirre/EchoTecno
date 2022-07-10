import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div className="contador">          
            <div >
                <button className="boton__cantidad" onClick={decrement}>-</button>  
            </div>
                <div className="numero">
                <h4 className='Number'>{quantity}</h4>
                </div> 
                <div>
                <button className="boton__cantidad" onClick={increment}>+</button>
            </div>
          
            <div>
                <button className="boton__cantidad agregar" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount