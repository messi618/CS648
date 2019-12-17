//CS648-12 vivek kumar
import React from 'react';

export const ProductForm = ({name, category, price, nameChange, categoryChange, priceChange, submit}) => {
    return(
                <div id="prodx">
                    <h3 class = "col-md-6">Add a new product</h3>
                    <form class= "col-md-6" onSubmit={submit}>
                        <div class="form-group">
                            <label for="name">
                                Name<br/>
                                <input class ="form-control" type="text" id="name" value = {name} onChange = {nameChange} />
                            </label>
                        </div>
                        <div class="form-group">
                            <label for="category">
                                Category<br/>
                                <input class ="form-control" type="text" id = "category" value = {category} onChange = {categoryChange} />
                            </label>
                        </div>
                        <div class="form-group">
                            <label for = "price">
                                Price<br/>
                                <input class ="form-control" type="text" id="price" value = {price} onChange = {priceChange} />
                            </label>
                        </div>
                        <input type="submit" class="btn btn-info" value = "Save" />
                    </form>
                </div>
    )
}
