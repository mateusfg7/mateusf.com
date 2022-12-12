import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

interface Props {
  title: string
}

export const Header: React.FC<Props> = ({ title }) => {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

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
      <div className="flex justify-center items-center gap-8">
        <nav className="flex justify-center items-center gap-5">
          <Link
            href="/"
            className="text-neutral-900 dark:text-neutral-100 hover:underline"
          >
            Home
          </Link>

          <Link
            href="/categories"
            className="text-neutral-900 dark:text-neutral-100 hover:underline"
          >
            Categories
          </Link>
        </nav>
        <button onClick={() => toggleTheme()} className="p-1">
          {theme === 'light' ? (
            <FiMoon className="text-xl" />
          ) : (
            <FiSun className="text-xl" />
          )}
        </button>
      </div>
    </header>
  )
}
