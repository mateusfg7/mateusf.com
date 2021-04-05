import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};

    font-family: 'Inter', sans-serif;
    color: ${props => props.theme.colors.text};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }

  div.type {
    width: 100vw;
    height: 100vh;

    background: url("/assets/typing.gif") no-repeat fixed center;
    background-size: cover;

    div.black-filter {
      width: 100vw;
      height: 100vh;

      background-color: rgba(0,0,0,0.3);
      backdrop-filter: blur(7px);
    }
  }

  div.center {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
  }
`
