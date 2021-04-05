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

  &.home {
    flex-direction: column;

    img {
      width: 50px;
      height: 50px;

      border-radius: 0;
    }

    div {
      flex-direction: column;

      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(7px);

      font-size: 1.4rem;

      header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1rem 2rem;

        text-align: end;

        background: black;
        color: white;
      }

      main {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.6rem;
        padding: 4rem 2rem;

        display: flex;
        gap: 0.4rem;

        a {
          color: white;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      span.shell {
        color: rgba(255, 255, 255, 0.8);
      }
      span.typewrite {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        border-right: 0.15em solid white;
        animation: ${typing} 3.5s steps(40, end),
          ${blink} 0.75s step-end infinite;
      }
    }
  }
`
