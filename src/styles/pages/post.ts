import styled from 'styled-components'

export const PostHeader = styled.div`
  padding: 1rem 0;

  line-height: 1.5rem;

  border-bottom: 1px solid ${props => props.theme.colors.unselected.secondText};
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 0.5rem;
  }

  .last-update {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    color: ${props => props.theme.colors.unselected.secondText};
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    margin-top: 0.3rem;

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
  line-height: 1.5rem;
  word-wrap: break-word;

  h1,
  h2,
  h3,
  h4 {
    margin: 1.5rem 0;
    font-weight: 500;
  }

  h1 {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  strong {
    font-weight: 500;
  }

  img {
    max-width: 100%;
  }

  a:hover {
    text-decoration: underline;
  }

  table {
    th,
    td {
      padding: 0.3rem;
    }
  }

  blockquote {
    padding-left: 0.3rem;
    margin: 0.5rem 0;

    border-left: 2px solid ${props => props.theme.colors.unselected.text};
    border-radius: 4px;

    background: rgba(0,0,0,0.04);

    font-size: 0.8rem;

    p {
      margin: 0;
    }
  }

  ul {
    list-style: disc inside;

    p {
      display: inline;
    }

    li {

      ul {
        padding: 0 1.5rem;

        li {
          list-style: '∟  ' inside;
          font-size: 1rem;
        }
      }
    }

    &.contains-task-list {
      list-style: none;
    }
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

  nav.toc {
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;


    ol {
      list-style: none;

      a {
        color: ${props => props.theme.colors.text};

        &.toc-link-h1 {
          font-weight: 500;
        }
        &.toc-link-h2 {
          font-weight: 400;
        }
        &.toc-link-h3 {
          font-weight: 300;
        }
        &.toc-link-h4 {
          font-weight: 200;
        }
      }

      &.toc-level-2 {
        padding: 0 1rem;
      }
      &.toc-level-3 {
        padding: 0 1.5rem;
      }
      &.toc-level-4 {
        padding: 0 2rem;
      }
    }
  }
`
