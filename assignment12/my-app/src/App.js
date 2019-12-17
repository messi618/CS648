//CS648-12 vivek kumar
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Products } from './Product'
import { PRODUCTS } from './Product'
import { render } from 'react-dom';


function App(productsArr) {
    return (
      <div>
        <Products products = {productsArr}/>
      </div>
    );
}

render( <App productsArr = {PRODUCTS}/>,document.getElementById('root'))

export default App;
