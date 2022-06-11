import { useEffect, useState } from "react"
import { getProductosById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()

    const params = useParams()

    useEffect( () => {
        getProductosById(params.productoId).then(response => {
            setProducto(response)
        })
    },[])

    console.log(producto)

    return (
        <>
            <h1> Detalle del Producto</h1>
            <ItemDetail {...producto} />
        </>
    )
}

export default ItemDetailContainer