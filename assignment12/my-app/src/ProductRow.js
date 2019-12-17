
import React from 'react';

export const ProductRow = ({name,category, price, deleteProduct}) => 

{   return (
            <tr>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{price}</td>
                    <td>{deleteProduct}</td>
            </tr>
            )
 }
