import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const Theme: DefaultTheme = {
  backgroundColor: '#fdbfc4',
  darkBrown: '#450000',
  fontFamily: '"Asap", sans-serif',
  lightGreen: '#83baa8',
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: 500;
  }

  html, body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.darkBrown};
  }
`;
