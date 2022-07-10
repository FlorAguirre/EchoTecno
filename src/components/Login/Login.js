import React, { useState } from 'react'
import "./Login.css"
import app from '../../services/firebase/index'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'


const auth = getAuth(app)

const Login =() => {

    const [registro, setRegistro] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
            const correo = e.target.email.value;
            const contraseña = e.target.contraseña.value;

            if(registro) {
                await createUserWithEmailAndPassword(auth, correo, contraseña)
            }
        else{
            await signInWithEmailAndPassword(auth, correo, contraseña)
        }
    }

    return (
        <>
        <h1>{registro ? 'Registrate': 'Inicia sesion'}</h1>
            <form className="form__registro" onSubmit={handleSubmit}>
                <div>
                <label className="padding">E-mail:</label>
               <input  type='email' placeholder='Ingrese el mail' id="email" required/>
               </div>
               <div>
               <label className="padding">Contraseña:</label>
               <input type='password' placeholder='Ingrese su contraseña' id="contraseña" required/>
            </div>

            <div>
               <button className="boton__cantidad" type='submit'>
                {registro ? 'Registrate' : 'Inicia sesion' }
               </button>
               </div>
                <div>
                <button className="boton__cantidad" onClick={() =>  
                    setRegistro(!registro)}>
                    {registro ? 'ya tienes una cuenta? Inicia sesion' : 'No tienes cuenta? Registrate'}
                </button>
            </div>
            </form>

           
        </>
    )
}

export default Login