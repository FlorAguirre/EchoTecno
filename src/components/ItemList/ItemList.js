import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({productos}) => {
    return (
       
        <ul className="contenedor" >   
        {productos.map(producto => <Item key= {producto.id} {...producto}/>)}
         </ul>
        
    )
}

export default ItemList