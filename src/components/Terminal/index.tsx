import React, { useState } from 'react'
import Link from 'next/link'

import { AiOutlineClose } from 'react-icons/ai'
import { BiBrain } from 'react-icons/bi'

import { Container } from './styles'

const Terminal: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Container className="home">
      <div className={isActive ? 'active' : 'disabled'}>
        <header>
          <span className="tile">Terminal</span>
          <button type="button" onClick={() => setIsActive(!isActive)}>
            {isActive ? <AiOutlineClose /> : <BiBrain />}
          </button>
        </header>

        <main className={isActive ? 'active' : 'disabled'}>
          {isActive && (
            <>
              <span className="shell">~#</span>
              <span className="typewrite">
                ./mateus-brain --show{' '}
                <Link href="/knowledge">
                  <a>knowledge</a>
                </Link>
                /
                <Link href="/info">
                  <a>info</a>
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
