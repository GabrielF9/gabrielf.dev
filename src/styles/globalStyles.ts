import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    list-style: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    max-width: 100vw;
    overflow-x: hidden;

    -webkit-font-smoothing: antialiased;

    &.locked, .locked{
      margin: 0;
      height: 100%;
      overflow: hidden;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;
