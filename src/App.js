
import './App.css';
import NavBar from './components/NavBar/NavBar';
/* import Footer from './components/Footer/Footer'; */
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




function App() {

  return (
    <div className="App">
  <NotificationProvider>
    <CartProvider>
        <BrowserRouter >
        <NavBar />
            <section>
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting ='EchoTecno'/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting ='EchoTecno'/>}/>
                  <Route path='/detail/:productoId' element ={<ItemDetailContainer />}/>
                  <Route path="/cart" element={<Cart />} />
                </Routes>
            </section>
          </BrowserRouter>
      </CartProvider>
      
          {/*   <footer>
              <Footer/>
            </footer> */}
            
  </NotificationProvider>
   
    </div>

   

    
    
    
  );  
}

export default App;
