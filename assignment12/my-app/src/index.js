//CS648-12 vivek kumar

import React from 'react';
import { render } from 'react-dom';
import Products from './Product'
import { PRODUCTS } from './Product'


//render components......
render( 
    <div>
        <Products products = {PRODUCTS} />
    </div>,
    document.getElementById('root'))

