import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import { getDoc, doc } from 'firebase/firestore'
import { db }  from '../../services/firebase'
import '../ItemDetail/ItemDetail.css'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)

    const  { productoId } = useParams()

    useEffect( () => {


        const docRef = doc(db, 'productos', productoId)

        getDoc(docRef).then(doc => {
            const productoFormatted = {id: doc.id, ...doc.data() }
            setProducto(productoFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    },[productoId])

    if(loading) {
        return <h1>Cargando...</h1>
    }


    return (
        <>
         
            <h1> Detalle del Producto</h1>
           <div >   
            <ItemDetail {...producto}/>
            </div>
        </>
    )
}

export default ItemDetailContainer