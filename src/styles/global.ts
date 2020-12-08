import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: .2s;
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
`
