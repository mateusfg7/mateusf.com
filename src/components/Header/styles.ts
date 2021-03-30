import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }



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
        padding: 1.5rem 2rem;

        text-align: end;

        background: black;
        color: white;
      }

      main {
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.6rem;
        padding: 4rem 2rem;

        a {
          color: white;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      span.shell {
        color: white;
      }
      span.blink {
        color: white;
        animation: ${blink} 1s linear infinite;
      }
    }
  }
`
