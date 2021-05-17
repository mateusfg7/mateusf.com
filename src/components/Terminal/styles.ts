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
  flex-direction: column;
  margin-bottom: 100px;

  span.shell {
    color: rgba(255, 255, 255, 0.8);
  }
  span.blink {
    color: black;
    animation: ${blink} 1s linear infinite;
  }

  div {
    --border-radius: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    font-size: 1.4rem;

    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(7px);

    border-radius: var(--border-radius);

    img {
      width: 50px;
      height: 50px;

      border-radius: 100%;
    }

    h2 {
      color: ${props => props.theme.colors.secondText};
    }

    header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1rem 2rem;

      text-align: end;

      background: black;
      color: white;

      border-radius: var(--border-radius);
    }

    main {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.6rem;
      padding: 4rem 2rem;

      display: flex;
      gap: 0.4rem;

      border-radius: 0 0 var(--border-radius) var(--border-radius);

      a {
        color: white;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    span.typewrite {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      border-right: 0.15em solid white;
      animation: ${typing} 3.5s steps(40, end), ${blink} 0.75s step-end infinite;
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

  img {
    width: 50px;
    height: 50px;

    border-radius: 0;
  }
`
