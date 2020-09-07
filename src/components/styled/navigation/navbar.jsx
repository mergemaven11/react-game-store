import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Wrapper = styled.div`
display: inline-block;
align-items: center;
background: #12151c;
font-family: "Poppins", sans-serif;
width: 100%;
padding: 0 1rem;
height: 105px;
background-color: #12151c;
-webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 0.5px;

h2 {
    text-align : center;
}

`


const Promo = styled.div`
width: 100%;
height: 30px;
background: #000;
color: white;
text-transform: uppercase;
text-align: center;
overflow: hidden;
color: #fff;

`

const Logo = styled.div`

position: flex;
display: inline-block;
justify-content: center;

a img {
    left: 120px;
    padding: 1em;
}

`

const Links = styled.div`

position: relative;
display: inline-block;
min-width: 300px;
text-align: right;
right: 10px;
height: 120px;
float: right;
padding: 1em;


`


const MenuWrap = styled.ul`

position: relative;
width: auto;
display: flex;
align-items: center;
justify-content: center;
height: 110px;

`

const MenuLi = styled.li`
list-style: none;
padding: 10px 10px;
margin: 0 0.3vh;

`

const NavLink = styled(Link)`
list-style: none;
text-decoration: none;
line-height: 55px;
padding: 0 1rem;
opacity: 0.8;
color: #fff;
`


export default {
    Promo,
    Wrapper,
    Links,
    Logo,
    MenuWrap,
    MenuLi,
    NavLink
}