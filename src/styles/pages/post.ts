import styled from 'styled-components'

export const PostHeader = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.unselected.secondText};
  margin-bottom: 2rem;
`

export const PostContent = styled.div`
  line-height: 1.5rem;

  h1,
  h2,
  h3,
  h4 {
    margin: 1rem 0;
    font-weight: 500;
  }

  strong {
    font-weight: 500;
  }

  code {
    padding: 0.5rem;
    background: rgba(0, 0, 0, 0.05);
  }

  pre {
    margin: 1rem 0;
    padding: 0.5rem;
    background: rgba(0, 0, 0, 0.05);

    code {
      background: none;
    }
  }
`
