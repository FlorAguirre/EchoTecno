import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import {getProductos, getProductosByCategory} from '../../asyncmock'
import { useParams } from "react-router-dom"

import { getDocs, collection, query, where } from 'firebase/firestore'
import {db} from '../../services/firebase'
import "./ItemListContainer.css"


const ItemListContainer = (props) => {

    const [productos , setProductos] = useState([])
    const [loading , setLoading] = useState(true)

    const { categoryId } = useParams()
   
   

    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId ? (
            query(collection(db, 'productos'), where('category', '==', categoryId))
        ) : (collection(db, 'productos'))
    
        getDocs(collectionRef).then(response => {
            console.log(response)
            const productosFormatted =  response.docs.map(doc => {
                return {id: doc.id, ...doc.data() }
            })
            setProductos(productosFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
  /*       if(!categoryId){
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
        } */
    
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
            :
                <h1 className='noHayProductos'>No hay productos</h1>
                }
        
        </div>
       
    )
}

export default ItemListContainer