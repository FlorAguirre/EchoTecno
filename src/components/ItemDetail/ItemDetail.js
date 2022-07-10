import { useState } from 'react'
import './ItemDetail.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

import { useNotification } from '../../notification/Notification'


const ItemDetail = ({id, name , description,price, img, stock,img2,img3}) => {
    const [quantAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(CartContext)

    const setNotification = useNotification()

    const handleOnAdd = (quantity) => {
        setNotification('sucess',`Se agregaron ${quantity} ${name}`)
        addItem({ id, name, price, quantity})
        setQuantityAdded(quantity)
    }


    return (
<div className='contenedor__item' >
         
    <div id="carouselExampleControlsNoTouching" className="carousel slide item__imagen" data-bs-touch="false" data-bs-interval="false">
        <div className="carousel-inner">
                <div class="carousel-item active">
                <img className = 'imagen__producto1'src={img}  alt= {name}/>
            </div>
            <div class="carousel-item">
                <img className = 'imagen__producto2'src={img2}  alt= {name}/>
            </div>
            <div class="carousel-item">
                <img className = 'imagen__producto3'src={img3}  alt= {name}/>
            </div>
        </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
    </div>

    <div>  
            <br></br>
            <h1 className="texto__itemDetail">{name}</h1>
            <br></br>
            <h2>Precio : $ {price}</h2>
            <br></br>
            <h3 className="descripcion__texto"> Descripción : {description} </h3>     
        
    </div>    
    
    <footer className='ItemFooter'>
            { quantAdded === 0 
                ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                :  <Link to='/cart'><button className='terminarCompra'>Terminar compra</button></Link>
            }
        </footer>

 

 </div>
          
    )
    }

export default ItemDetail