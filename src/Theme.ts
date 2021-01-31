import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const Theme: DefaultTheme = {
  backgroundColor: 'rgba(161, 222, 164, 1)',
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

  .background {
    animation: background 15s linear infinite;
    background-image: url('./bg.svg');
    background-repeat: repeat;
    background-color: ${(props) => props.theme.backgroundColor};
    bottom: 0;
    left: -100px;
    position: fixed;
    right: 0;
    top: -100px;
    z-index: -1;
  }

  a {
    color: ${(props) => props.theme.buttonBlueHover};
    text-decoration: none;
  }

  @keyframes background {
    0% {
      transform: translate3D(0, 0, 0);
    }

    100% {
      transform: translate3D(100px, 100px, 0);
    }
  }
`;
