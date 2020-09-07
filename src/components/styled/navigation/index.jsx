import React, { useContext } from 'react';

import NavBar from './navbar'

import { Link } from 'react-router-dom';
import { CartContext } from '../../cart/context'

export default function NavigationBar() {
    const cartContext = useContext(CartContext)
    const cartCount = cartContext.items.length;

    return (
        <>
        <NavBar.Promo>20% off first purchase!</NavBar.Promo>
        <NavBar.Wrapper>
            
            <NavBar.Logo>
            <a href="/"><img alt="logo" width={80} src={`/images/myLogo.png`}></img></a>
            </NavBar.Logo>
            <NavBar.Links>
                <NavBar.MenuWrap>
                    <NavBar.NavLink to="/"> Store </NavBar.NavLink>
                    <NavBar.NavLink to="/"> About </NavBar.NavLink>
                    <NavBar.NavLink to="/confirm-cart">Cart ({cartCount})</NavBar.NavLink>
                </NavBar.MenuWrap>
            </NavBar.Links>
         </NavBar.Wrapper>
         </>
    )
}