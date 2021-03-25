import React from 'react'
import Link from 'next/link'

import { StyledHeader } from './styles'

interface Props {
  imageUrl: string
  title: string
}

const Header: React.FC<Props> = ({ imageUrl, title }) => {
  return (
    <StyledHeader>
      <div>
        <img src={imageUrl} alt="" />
        <h2>Mateus Felipe</h2>/<h1>{title}</h1>
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

export default Header
