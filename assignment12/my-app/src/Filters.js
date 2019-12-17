//CS648-12 vivek kumar

import React from 'react';

export const Filter  = ({handleFilter}) => {
    return (
        <form class=" col-6">
            <input type="search" class = "form-control mr-sm-2" onChange = {handleFilter} placeholder="Search..." />
        </form>
    )
}
