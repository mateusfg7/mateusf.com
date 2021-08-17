import styled from 'styled-components'

export const KnowledgeSection = styled.section`
  margin-bottom: 30px;

  h2 {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.unselected.text};
  }

  span {
    color: ${props => props.theme.colors.unselected.secondText};
  }

  &:hover {
    h2 {
      /* color: ${props => props.theme.colors.text}; */
      color: ${props => props.theme.colors.primary};
    }

    span {
      color: ${props => props.theme.colors.secondText};
    }
  }
`
