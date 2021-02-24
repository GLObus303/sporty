import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, #__next, body  {
    height: 100%;
    overflow: auto;
  }

  body {
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    border: none;
    background-color: none
  }

  a,
  a:active,
  a:hover,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
