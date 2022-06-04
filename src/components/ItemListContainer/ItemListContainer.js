import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import {getProductos} from '../../asyncmock'


const ItemListContainer = (props) => {

    const [productos , setProductos] = useState([])

    useEffect(() => {
        getProductos().then(response => {
            setProductos(response)
        })
    }, [])

/*     const productosComponentes = productos.map(producto =>{
        return (
            <li key={producto.id} >
                {producto.name}
            </li>
        )
    }) */

    return (
        <div>
        <h1>{props.greeting}</h1>
        <ItemList productos = { productos} /> 
        </div>
    )
}

export default ItemListContainer