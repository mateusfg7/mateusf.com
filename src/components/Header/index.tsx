import React from 'react'
import Link from 'next/link'

import { StyledHeader } from './styles'

interface Props {
  imageUrl: string
  title: string
  knowledgePage?: boolean
}

const Header: React.FC<Props> = ({ imageUrl, title, knowledgePage }) => {
  return (
    <StyledHeader>
      <div>
        <img src={imageUrl} alt="" />
        <h2>brain</h2>/<h1>{title}</h1>
      </div>
      <nav>
        {knowledgePage ? (
          <Link href="/">
            <a>Home</a>
          </Link>
        ) : (
          <Link href="/knowledge">
            <a>Knowledge</a>
          </Link>
        )}

        <Link href="/categories">
          <a>Categories</a>
        </Link>
      </nav>
    </StyledHeader>
  )
}

export default Header
