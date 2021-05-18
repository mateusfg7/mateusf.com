import styled from 'styled-components'

export const Container = styled.div`
  background: black;
`

export const LinksContainer = styled.div`
  a {
    display: block;
    padding: 1rem;

    font-size: 2rem;
    color: green;

    border: 2px dashed green;

    filter: blur(3px);

    &:hover {
      cursor: pointer;

      filter: none;
    }
  }
`
