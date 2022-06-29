import React from "react"
import {Link} from 'react-router-dom'
import login from '../../assets/img/2931147_user_face_avatar_account_head_icon.png'
import './LoginIcon.css'



const LoginIcon =() =>{
    return(
    <div className='carrito__button carrito'>
    <Link to ='/login'>
    <img src={login} className='login__imagen'alt='login-icon'/>
  </Link>

</div>
)}

export default LoginIcon