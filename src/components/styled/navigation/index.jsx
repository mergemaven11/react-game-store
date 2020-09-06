import React, { useContext } from 'react';

import NavBar from './navbar'

import { Link } from 'react-router-dom';
import { CartContext } from '../../cart/context'

export default function NavigationBar() {
    const cartContext = useContext(CartContext)
    const cartCount = cartContext.items.length;

    return (
        <div className="Wrapper">
            <div className="section">GameLand</div>
            <div className="section">
                <Link to="/">Products</Link>
                <Link to="/confirm-cart">See Cart ({cartCount})</Link>
            </div>
         </div>
    )
}