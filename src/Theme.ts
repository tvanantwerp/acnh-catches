import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const Theme: DefaultTheme = {
  backgroundColor: 'rgba(238, 231, 185, 1)',
  containerBackgroundColor: 'rgba(255, 249, 227, 1)',
  darkBrown: 'rgba(121, 101, 81, 1)',
  fontFamily: '"Asap", sans-serif',
  buttonBlue: 'rgba(210, 237, 244, 1)',
  buttonBlueHover: 'rgba(60, 190, 182, 1)',
  labelYellow: 'rgba(253, 235, 164, 1)',
  labelYellowHover: 'rgba(255, 207, 10, 1)',
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
    color: ${(props) => props.theme.darkBrown};
    font-size: 16px;
  }

  html {
    animation: background 5s linear infinite;
    background-image: url('./bg.svg');
    background-repeat: repeat;
    background-color: ${(props) => props.theme.backgroundColor};

  }

  a {
    color: ${(props) => props.theme.buttonBlueHover};
    text-decoration: none;
  }

  @keyframes background {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: 100px 100px;
    }
  }
`;
