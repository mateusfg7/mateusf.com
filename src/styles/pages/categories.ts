import styled from 'styled-components'

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const CategoryButton = styled.div`
  padding: 0.3rem 0.9rem;

  border: 2px solid ${props => props.theme.colors.unselected.text};

  font-weight: bold;
  color: ${props => props.theme.colors.unselected.text};

  transition: 0.1s;

  &:hover {
    cursor: pointer;

    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`
