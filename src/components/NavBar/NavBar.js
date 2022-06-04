import logo from '../../assets/img/Echotecno-removebg-preview.png'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <header className="header">    
        <nav>  
            <div className="header__componentes"> 
          <img src={logo} className="header__imagen"></img>
            <button className ="header__button">Celulares</button>
            <button className ="header__button">Notebook</button>
            <button className ="header__button">Audifonos</button>
            <button className ="header__button">Tablet</button>
            <button className ="header__button">Accesorios</button>
            <CartWidget/>
            </div>
            
        </nav>
        </header>
    )
}

export default NavBar