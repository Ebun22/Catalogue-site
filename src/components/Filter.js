import React, { Component } from 'react'

function Filter({handleClick, filterClick}) {
    return (
        <div class="pos">
            <div onClick={handleClick} class="lg:flex:1 lg:my-3 lg:mr-12 drop bg-yellow-500 px-8 py-2 w-full text-center rounded font-bold text-base">
                <p>Categories</p>
            </div>
            <div class="drop-cont hidden bg-yellow-500 my-1 px-8 py-2 text-center rounded font-bold text-base">
                <p onClick={filterClick}>Electronics</p>
                <p onClick={filterClick}>Jewelery</p>
                <p onClick={filterClick}>Men's clothing</p>
                <p onClick={filterClick}>Women's clothing</p>
            </div>
        </div>

    )
}

export default Filter