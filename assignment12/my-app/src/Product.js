//CS648-12 vivek kumar

import PropTypes from 'prop-types'
import React, {Component} from 'react';
import { Filter } from './Filters'
import { ProductTable } from './ProductTable'
import { ProductForm } from './ProductForm'
import { render } from 'react-dom';

// input data for the products component
export let PRODUCTS = [
        //my database for now
        {"id": 1, "category": "Home", "price": "$74.99999999", "name": 'Lock and key'},
        {"id": 2, "category": "Home", "price": "$149.999999", "name": 'smart Utensils'},
        {"id": 3, "category": "Home", "price": "$124.999999", "name": 'Audio System'},
        {"id": 4, "category": "Furniture", "price": "$969.00", "name": 'Recliner'},
        {"id": 5, "category": "Furniture", "price": "$153.00", "name": 'chair'},
        {"id": 6, "category": "Furniture", "price": "$120.00", "name": 'bean bag'}
]


//init states
class Products extends Component {
    state = {
                name: "",
                price: "",
                category:"",
                filteredData:[],
                filtered:false
        }

    //set states
    
                        handleCategoryChange = e => {
                            this.setState({category: e.target.value})
                        }

                        handleChange = e => {
                            this.setState({name: e.target.value})
                        }

                        handlePriceChange = e => {
                            this.setState({price: e.target.value})
                        }


    //save
    handleSubmit = e => {
        PRODUCTS.push({"id": PRODUCTS.length+1,
        "category":this.state.category, 
        "price": this.state.price, 
        "name":this.state.name})
        render(
            <Products products={PRODUCTS} />,
            document.getElementById('root')
            )
            this.setState({name:'', category:'', price:''})
            e.preventDefault()

    }

    //delete
    handleDestroy = e => {
            document.getElementById(e.target.id).parentElement.parentElement.innerHTML = ""   
    }    

    //event handler
    handleFilter = e => {
            const productArray =  this.props.products
            const filteredProd =  productArray.filter(product => product.name === e.target.value)
            this.setState({filtered:true})
            this.setState({filteredData: filteredProd})

        if(e.target.value === "") {
            this.setState({filtered:false})
        }
            e.preventDefault()
      }
      
    //render
    render() {
        const { products } = this.props
        return (
            <div>
                <h2 class ="col-md-6">My Inventory</h2>
                <Filter handleFilter = {this.handleFilter}/>
                
                <ProductTable 
                productList     = {products}
                filtered        =  {this.state.filtered}
                filteredData    = {this.state.filteredData}
                deleteProduct    = {this.handleDestroy} />

                <ProductForm 
                name            ={this.state.name}
                category        = {this.state.category}
                price           = {this.state.price}
                nameChange      = {this.handleChange}
                categoryChange  = {this.handleCategoryChange}
                priceChange     = {this.handlePriceChange}
                submit          = {this.handleSubmit} />

                <footer class = "col-md-10 my-5 pt-3"><hr/></footer>
            </div>
        )
    }
}

Products.propTypes = {
            products:PropTypes.array
}


//export
export default Products