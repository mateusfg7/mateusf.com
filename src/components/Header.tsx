import React from 'react'
import Link from 'next/link'

interface Props {
  title: string
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className="flex justify-between items-center mb-24">
      <div className="flex items-center gap-5">
        <img
          src="https://github.com/mateusfg7.png"
          className="w-12 h-12 rounded-full text-gray-600"
        />
        <h2>brain</h2>
        <span className="text-xs">/</span>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <nav>
        <Link
          href="/"
          className="text-neutral-900 dark:text-neutral-100 mr-8 hover:underline"
        >
          Home
        </Link>

        <Link
          href="/categories"
          className="text-neutral-900 dark:text-neutral-100 mr-8 hover:underline"
        >
          Categories
        </Link>
      </nav>
    </header>
  )
}
