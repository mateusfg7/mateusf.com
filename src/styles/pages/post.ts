import styled from 'styled-components'

export const PostHeader = styled.div`
  padding: 1rem 0;

  line-height: 1.5rem;

  border-bottom: 1px solid ${props => props.theme.colors.unselected.secondText};
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 0.5rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .tag {
      color: ${props => props.theme.colors.unselected.secondText};

      transition: color 0.2s;

      &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.text};
      }
    }
  }
`

export const PostContent = styled.div`
  line-height: 2rem;
  word-wrap: break-word;

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

  img {
    width: 100%;
  }

  code {
    padding: 0.4rem;
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
