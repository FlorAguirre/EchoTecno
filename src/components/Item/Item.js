import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({name, img, price, id}) => {
    return (
            <div className="productos">
                <img className = 'imagen__producto'src={img}  alt= {name}/>
                <h1>{name}</h1>
                <h2>Precio: $ {price}</h2>
                <Link to= {`/detail/${id}`} className= 'Option'>
                    <button className='boton'>Ver detalle</button>
                </Link>
            </div>
       
    )
}
export default Item