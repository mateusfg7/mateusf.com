import React from 'react'
import Link from 'next/link'

interface Props {
  imageUrl: string
  title: string
  knowledgePage?: boolean
}

const Header: React.FC<Props> = ({ imageUrl, title, knowledgePage }) => {
  return (
    <header className="flex justify-between items-center mb-24">
      <div className="flex items-center gap-5">
        <img src={imageUrl} className="w-12 h-12 rounded-full text-gray-600" />
        <h2>brain</h2>
        <span className="text-xs">/</span>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <nav>
        {knowledgePage ? (
          <Link href="/">
            <a className="text-[#111] mr-8 hover:underline">Home</a>
          </Link>
        ) : (
          <Link href="/knowledge">
            <a className="text-[#111] mr-8 hover:underline">Knowledge</a>
          </Link>
        )}

        <Link href="/categories">
          <a className="text-[#111] mr-8 hover:underline">Categories</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
