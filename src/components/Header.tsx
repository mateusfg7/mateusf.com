import React from 'react'
import Link from 'next/link'

interface Props {
  imageUrl: string
  title: string
}

export const Header: React.FC<Props> = ({ imageUrl, title }) => {
  return (
    <header className="flex justify-between items-center mb-24">
      <div className="flex items-center gap-5">
        <img src={imageUrl} className="w-12 h-12 rounded-full text-gray-600" />
        <h2>brain</h2>
        <span className="text-xs">/</span>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <nav>
        <Link href="/">
          <a className="text-text mr-8 hover:underline">Home</a>
        </Link>

        <Link href="/categories">
          <a className="text-text mr-8 hover:underline">Categories</a>
        </Link>
      </nav>
    </header>
  )
}
