import React, { useContext } from 'react';

import products from '../../data/products';
import Cart from '../cart';

import Main from '../styled/main';


import { CartContext } from '../cart/context';

export default function Store() {

    const cartCtx = useContext(CartContext)

    return (
    <div>
        {
        products.map(product => (
        <Main.Product>
            <img src={ `/images/${product.price}.jpg` } alt={product.name} width={ 100 }/>
            <h3>{product.name}</h3>

            <div>
                <button
                onClick={() => cartCtx.addToCart(product)}
                >
                Add to cart
                </button>
            </div>
        </Main.Product>))}
    </div>
    )
}