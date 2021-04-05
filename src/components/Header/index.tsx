import React from 'react'
import Link from 'next/link'

import { StyledHeader } from './styles'

interface Props {
  imageUrl: string
  title: string
  isHome?: boolean
}

const Header: React.FC<Props> = ({ imageUrl, title, isHome }) => {
  if (isHome) {
    return (
      <StyledHeader className="home">
        <div>
          <header>
            <span className="tile">Terminal</span>
            <span>x</span>
          </header>
          <main>
            <span className="shell">~#</span>
            <span className="typewrite">
              ./mateus-brain --show{' '}
              <Link href="/posts">
                <a>posts</a>
              </Link>
              /
              <Link href="/categories">
                <a>categories</a>
              </Link>
            </span>
          </main>
        </div>
      </StyledHeader>
    )
  } else {
    return (
      <StyledHeader>
        <div>
          <img src={imageUrl} alt="" />
          <h2>brain</h2>/<h1>{title}</h1>
        </div>
        <nav>
          <Link href="/posts">
            <a>Posts</a>
          </Link>

          <Link href="/categories">
            <a>Categories</a>
          </Link>
        </nav>
      </StyledHeader>
    )
  }
}

export default Header
