import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    font-size: 0.8rem;

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
    }
  }
`
