import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    src: local('Proxima Nova Bold'), local('ProximaNova-Bold'),
      url('/assets/fonts/ProximaNova-Bold.woff2')
        format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: local('Proxima Nova Semibold'), local('ProximaNova-Semibold'),
      url('/assets/fonts/ProximaNova-Semibold.woff2')
        format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: local('Proxima Nova Medium'), local('ProximaNova-Medium'),
      url('/assets/fonts/ProximaNova-Medium.woff2')
        format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: local('Proxima Nova Regular'), local('ProximaNova-Regular'),
      url('/assets/fonts/ProximaNova-Regular.woff2')
        format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  html, #__next, body  {
    min-height: 100%;
    overflow: auto;
  }

  body {
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Proxima Nova', sans-serif;
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
