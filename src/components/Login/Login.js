import React, { useState } from 'react'

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
        <h1>{registro ? 'registrate': 'inicia sesion'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label>E-mail:</label>
               <input type='email' placeholder='Ingrese el mail' id="email" required/>
               </div>
               <div>
               <label>Contraseña:</label>
               <input type='password' placeholder='Ingrese su contraseña' id="contraseña" required/>
            </div>

            <div>
               <button type='submit'>
                {registro ? 'registrate' : 'inicia sesion' }
               </button>
               </div>
            </form>

            <div>
                <button onClick={() =>  
                    setRegistro(!registro)}>
                    {registro ? 'ya tienes una cuenta? Inicia sesion' : 'No tienes cuenta? Registrate'}
                </button>
            </div>
        </>
    )
}

export default Login