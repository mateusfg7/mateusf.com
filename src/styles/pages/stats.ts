import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 16rem;

  h1,
  h2,
  h3,
  h4 {
    font-weight: 300;
  }

  background: rgb(245, 245, 245);
`

export const Header = styled.header`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 12rem;

  padding: 2rem 0 7rem;

  background: white;
`

export const Main = styled.div`
  position: relative;
  top: 8rem;

  height: max-content;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, min-content);
  grid-template-areas:
    'status status'
    'trophy trophy'
    'code-time code-time'
    'languages languages';

  gap: 1rem;

  justify-content: center;
  align-items: center;

  width: 50%;

  top: -4rem;
  right: 50%;
  transform: translateX(50%);

  font-family: 'Source Sans Pro', sans-serif;

  backdrop-filter: blur(5px);

  section.topic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    border-radius: 10px;

    width: 100%;
    height: 100%;

    text-align: center;

    background: white;

    box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);

    header {
      width: 30%;
      padding: 0.5rem;
      margin: 0 auto 1rem;

      text-align: center;

      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    img {
      width: 100%;
    }
  }

  section.trophy {
    grid-area: trophy;
  }

  section.status {
    grid-area: status;
  }

  section.languages {
    grid-area: languages;
  }

  section.code-time {
    grid-area: code-time;
  }
`
