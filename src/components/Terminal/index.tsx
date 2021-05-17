import React, { useState } from 'react'
import Link from 'next/link'

import { Container } from './styles'

const Terminal: React.FC = () => {
  const [isActive, setIsActive] = useState(true)

  return (
    <Container className="home">
      <div className={isActive ? 'active' : 'disabled'}>
        <header>
          <span className="tile">Terminal</span>
          <button type="button" onClick={() => setIsActive(!isActive)}>
            {isActive ? 'x' : '-'}
          </button>
        </header>

        <main className={isActive ? 'active' : 'disabled'}>
          {isActive && (
            <>
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
            </>
          )}
        </main>
      </div>
    </Container>
  )
}

export default Terminal
