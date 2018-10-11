// @ts-ignore
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo+2:400,900');

  body {
    color: #333333;
    font-family: 'Exo 2', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;