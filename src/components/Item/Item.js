const Item = ({name, img, price}) => {
    return (
        <div className="contenedor">
          <div className="productos">
            <img className = 'imagen__producto'src={img}  alt= {name}/>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <button>Ver detalle</button>
        </div>
        </div>
    )
}

export default Item