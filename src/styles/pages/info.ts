import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background: #000 fixed;
  color: #fff;
  font-size: 1.15rem;

  div.image-info {
    display: flex;
    gap: 7px;

    img {
      width: 450px;
      filter: brightness(0.4);
    }
  }

  a {
    color: lightblue;

    &:hover {
      text-decoration: underline;
    }
  }
`
