import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white; }
`

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span.shell {
    color: black;
  }
  span.blink {
    color: black;
    animation: ${blink} 1s linear infinite;
  }

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    font-size: 0.7rem;

    img {
      width: 50px;
      height: 50px;

      border-radius: 100%;
    }

    h2 {
      color: ${props => props.theme.colors.secondText};
    }
  }

  nav {
    a {
      color: ${props => props.theme.colors.text};
      margin-right: 30px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  margin-bottom: 100px;
`
