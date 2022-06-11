import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import {getProductos, getProductosByCategory} from '../../asyncmock'
import { useParams } from "react-router-dom"


const ItemListContainer = (props) => {

    const [productos , setProductos] = useState([])
    const [loading , setLoading] = useState(true)

    const { categoryId } = useParams()
   
   

    useEffect(() => {

        setLoading(true)
    

        if(!categoryId){
             getProductos().then(prods => {
            setProductos(prods)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        }else{
            getProductosByCategory(categoryId).then(prods => {
                setProductos(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
    
    }, [categoryId])


    if(loading) {
        return <h1>Cargando...</h1>
    }

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
        {productos.length > 0
            ? <ItemList productos = { productos} /> 
            :<h1>No hay productos</h1>}
        
        </div>
    )
}

export default ItemListContainer