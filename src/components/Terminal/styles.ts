import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white; }
`

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`

export const Container = styled.header`
  margin-bottom: 100px;

  min-width: 37rem;

  div {
    --border-radius: 0.9rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.4rem;

    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(7px);

    border-radius: var(--border-radius);

    &.disabled {
      background: none;
      backdrop-filter: none;
    }

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

      button {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0 0.5rem;

        background: none;
        border: none;

        border-radius: var(--border-radius);

        font-size: 1.4rem;
        color: white;

        &:hover {
          cursor: pointer;
        }
      }
    }

    main {
      color: rgba(255, 255, 255, 0.8);
      font-family: 'Hack';
      font-size: 1.4rem;
      padding: 4rem 2rem;

      display: flex;
      gap: 0.4rem;

      border-radius: 0 0 var(--border-radius) var(--border-radius);

      transition: 0.5s;

      span.shell {
        color: rgba(255, 255, 255, 0.8);
      }

      a {
        color: white;

        &:hover {
          text-decoration: underline;
        }
      }

      &.disabled {
        padding: 0;
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
`
