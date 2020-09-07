import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border-box;
    margin: 50px;
    padding: 50px;

    h1{
        text-align: center;
        font-family: 'Bentham', serif;
        color: #474747;
        margin-bottom: 80px;
    }
`

const Product = styled.div`
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    padding: 50px;
    margin-bottom: 30px;
    border-radius: 7px 7px 7px 7px;

    img {
        margin-bottom: 10px;

    }

    div {
        button {
            float: right;
            display: inline-block;
            height: 30px;
            width: 115px;
            margin: 5px ;
            box-sizing: border-box;
            border: transparent;
            border-radius: 7px 7px 7px 7px;
            font-family: 'Raleway', sans-serif;
            font-size: 8px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            color: #ffffff;
            background-color: #a742f5;
            cursor: pointer;
            outline: none;
            position: relative;
          }
          
          button:hover {
            background-color: #f56f42;
          }
    }

`


const Button = styled.div`

left: 25px;




`




export default {
    Wrapper,
    Product,
    Button
}