
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import React, {
  useState,
  createContext
} from 'react'
import {CartProvider} from './context/CartContext'
import { NotificationProvider } from './notification/Notification';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import Login from './components/Login/Login';

import app from './services/firebase/index'
import {getAuth, onAuthStateChanged} from 'firebase/auth'


const auth = getAuth(app)

function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase){
        setUsuario(usuarioFirebase)
    }
    else{
        setUsuario(null)
    }
    
  })

  return (
    <div className="App">
  <NotificationProvider>
    <CartProvider>
        <BrowserRouter >
        <NavBar />
          
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting ='Nuestros Productos'/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting =''/>}/>
                  <Route path='/detail/:productoId' element ={<ItemDetailContainer />}/>
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<CheckOut />} /> 
                  <Route path="/login" element={<Login/>} /> 
                  </Routes>
            <Footer/>
          </BrowserRouter>
      </CartProvider>

  </NotificationProvider>

    </div>
    
  );  
}

export default App;
