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
    font-family: 'Source+Sans+3', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.primaryBg};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.LightTextColor};
  }

  ul {
    list-style: none;

  }

  section {
    padding: 50px 0;
  }


  p {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    letter-spacing: 0.01em;
    color: ${theme.colors.textPrimary};
  }

  h3 {
    font-weight: 700;
    font-size: 12px;
    line-height: 1.35;
    letter-spacing: 0.01em;
    text-align: center;
    color: ${theme.colors.DarkTextColor};
  }
`