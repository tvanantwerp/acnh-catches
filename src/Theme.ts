import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const Theme: DefaultTheme = {
  backgroundColor: '#6AC1DB',
  darkBrown: '#450000',
  fontFamily: '"Asap", sans-serif',
  lightGreen: '#9ad2cb',
  teaGreen: '#d7ebba',
  fontSize: '16px',
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
    font-size: 16px;
  }
`;
