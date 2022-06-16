
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import React, {
  useState,
  createContext
} from 'react'
import {CartProvider} from './context/CartContext'




function App() {

  return (
    <div className="App">
   <CartProvider>
   {/*    <ItemListContainer greeting ='EchoTecno'/> */}
    {/*   <ItemDetailContainer /> */}
      <BrowserRouter >
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting ='EchoTecno'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting ='EchoTecno'/>}/>
          <Route path='/detail/:productoId' element ={<ItemDetailContainer />}/>
          <Route path='/cart' element ={<h1>CART</h1>} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
