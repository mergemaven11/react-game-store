import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  body {
    background: #f4f6f3;
    height:100%;
    font-family: 'Ibarra Real Nova', sans-serif;
    line-height: 1.4;
  }
  
  * {
    box-sizing: border-box;
  }
  
`;

export default GlobalStyles;