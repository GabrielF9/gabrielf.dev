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
    font-family: 'Lora', serif;
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

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.black};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.grey};
    border-radius: 3px;
  }
`;
