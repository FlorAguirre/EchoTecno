import './ItemDetail.css'

const ItemDetail = ({id, name , description,price, img}) => {
    return (
        <div className ='contenedor__item'>
            <img className = 'imagen__producto'src={img}  alt= {name}/>
            <br></br>
            <h1>{name}</h1>
            <br></br>
            <h2>Precio : $ {price}</h2>
            <br></br>
            <h3> Descripción : {description} </h3>
        </div>
    )
    }
export default ItemDetail