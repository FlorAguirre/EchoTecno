import logo from '../../assets/img/Echotecno-removebg-preview.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="header">    
        <nav>  
            <div className="header__componentes"> 
        <Link to='/'> <img src={logo} className="header__imagen"></img></Link> 
            <Link to='/category/celular'>
                <button className ="header__button">Celulares</button></Link >
            <Link to='/category/Notebook'>
            <button className ="header__button">Notebook</button></Link >
            <Link to='/category/Audifonos'> 
            <button className ="header__button">Audifonos</button></Link >
            <Link to='/category/Tablet'>
             <button className ="header__button">Tablet</button></Link >
            <Link to='/category/Accesorios'>
             <button className ="header__button">Accesorios</button></Link >
            <CartWidget/>
            </div>
            
        </nav>
        </header>
    )
}

export default NavBar