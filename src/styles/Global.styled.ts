import {createGlobalStyle} from 'styled-components';
import {theme} from '@/styles/Theme';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-padding-top: 24px; scroll-behavior: smooth; }
  body {
    font-family: 'Source Sans 3', sans-serif;
    color: ${theme.colors.textPrimary};
    background: ${theme.colors.primaryBg};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  a { color: inherit; text-decoration: none; }
  ul { list-style: none; }
  img { max-width: 100%; display: block; }
  button, input, textarea { font: inherit; }
  button, a, input, textarea { -webkit-tap-highlight-color: transparent; }
  a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
    outline: 2px solid ${theme.colors.accentColor};
    outline-offset: 5px;
  }
  section { padding: ${theme.sizes.sectionPadding} 0; }
  p { font-size: 17px; line-height: 1.75; color: ${theme.colors.textSecondary}; }
  h1, h2, h3 { color: ${theme.colors.darkTitleColor}; line-height: 1.15; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { transition: none !important; animation: none !important; }
  }
  ::selection { background: ${theme.colors.accentColor}; color: ${theme.colors.darkBg}; }
`;
