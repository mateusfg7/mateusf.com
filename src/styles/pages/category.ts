import styled from 'styled-components'

export const Knowledge = styled.section`
  margin-top: 30px;

  h2 {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.unselected.text};
  }

  span {
    color: ${props => props.theme.colors.unselected.secondText};
  }

  &:hover {
    h2 {
      color: ${props => props.theme.colors.primary};
    }

    span {
      color: ${props => props.theme.colors.secondText};
    }
  }
`
