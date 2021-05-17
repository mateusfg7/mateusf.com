import React from 'react'
import Link from 'next/link'

import { StyledHeader } from './styles'

const Terminal: React.FC = () => {
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
}

export default Terminal
