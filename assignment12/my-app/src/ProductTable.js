//CS648-12 vivek kumar
import React from 'react';
import { ProductRow } from './ProductRow'

//prod table render
export const ProductTable = ({productList, filtered, filteredData, deleteProduct}) => {
    return (
        <div class="col-md-6">
            <table id = "products" class = "table table-striped">
                <thead class = "thead-dark">
                    <tr>
                        <th scope = "col">Name:</th>
                        <th scope ="col">Category:</th>
                        <th scope ="col">Price:</th>
                        <th scope ="col"> </th>
                    </tr>
                </thead>

                {filtered
                ? <tbody>
                        {filteredData.map(
                            (product, i) =>
                                <ProductRow
                                        key = {i}
                                        name = {product.name}
                                        category = {product.category}
                                        price ={product.price}
                                        deleteProduct = {<button type = {"button"} id = {i} onClick = {deleteProduct} class = 
                                                                        {["btn btn-info"]}>Delete</button>} 
                            /> 
                        )}

                </tbody>
            
                    :<tbody>
                        {productList.map (
                            (product, i) =>
                                    <ProductRow
                                    key = {i}
                                    name = {product.name}
                                    category = {product.category}
                                    price ={product.price}
                                    deleteProduct = {<button id = {i} onClick = {deleteProduct} class = 
                                                                    {["btn btn-info"]}>Delete</button>} 
                            />
                        )}

                    </tbody>
                }            
            </table>
        </div>
    )
}
