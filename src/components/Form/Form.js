import React from 'react'

import app from '../../services/firebase/index'
import{getAuth, signOut} from 'firebase/auth'


const auth = getAuth(app)


const Form = () => {


    return (
        <div>
            <div>
                <h3>Completa los datos</h3>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" name='name' placeholder='Ingrese su nombre'/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name='email' placeholder='Ingrese su Email'/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="text" name='phone' placeholder='Ingrese su telefono'/>
                    </div>
                    <div>
                        <label>Address</label>
                        <input type="text" name='address' placeholder='Ingrese su dirección'/>
                    </div>

                    <button>
                        
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form