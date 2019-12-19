import React, { Component } from 'react'
import ProductRow from './ProductRow'

class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleDestroy(id) {
        this.props.onDestroy(id)
    }
    
    render () {
        let productsArray = this.props.products;
        let rows = []

        productsArray.forEach((product) => {
            if (product.product.name.indexOf(this.props.filterText) === -1) {
                return
            }
            rows.push (
                <ProductRow 
                    product={product.product} 
                    key={product.id} 
                    onDestroy={this.handleDestroy}></ProductRow>
            )
        })

        return (
            <div>
                <table class="table table-striped table-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>In Stock</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable