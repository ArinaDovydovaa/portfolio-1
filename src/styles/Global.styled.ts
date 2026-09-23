import {createGlobalStyle} from 'styled-components';
import {theme} from "@/styles/Theme.ts";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    background-color: ${theme.colors.secondaryBg};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.secondaryTitleColor};
  }

  ul {
    list-style: none;
    
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.font};
  }

  section {
    padding: 50px 0;
  }


  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    letter-spacing: 0.01em;
    color: ${theme.colors.font};
  }

  h3 {
    font-weight: 600;
    font-size: 25px;
    letter-spacing: 0.01em;
    text-align: center;
    color: ${theme.colors.small};
  }
`