import { useState } from 'react'
import './ItemDetail.css'
import { useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import CartContext from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

import { useNotification } from '../../notification/Notification'


const ItemDetail = ({id, name , description,price, img, stock}) => {
    const [quantAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(CartContext)

    const setNotification = useNotification()

    const handleOnAdd = (quantity) => {
        setNotification('sucess',`Se agregaron ${quantity} ${name}`)
        addItem({ id, name, price, quantity})
        setQuantityAdded(quantity)
    }
/* 
    const {cart, setCart} = useContext(Context)

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} ${name}`)
        setCart([...cart, {id, name, price, quantity}])
    } */


    return (
        <div className ='contenedor__item'>
            <img className = 'imagen__producto'src={img}  alt= {name}/>
            <br></br>
            <h1>{name}</h1>
            <br></br>
            <h2>Precio : $ {price}</h2>
            <br></br>
            <h3> Descripción : {description} </h3>

     
{/* 
  {   <Count onAdd={handleOnAdd} stock={stock}/> } */}
    <footer className='ItemFooter'>
            { quantAdded === 0 
                ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                :  <Link to='/cart'>Terminar compra</Link>
            }
        </footer>
        </div>
          
    )
    }

export default ItemDetail