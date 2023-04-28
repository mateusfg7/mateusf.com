'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { ToggleTheme } from './ToggleTheme'

export function Header() {
  const [percentScrollPosition, setPercentScrollPosition] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScrollValue, setMaxScrollValue] = useState(0)

  function handleScroll() {
    if (window) {
      setScrollPosition(window.scrollY)
    }
    if (document) {
      setMaxScrollValue(
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      )
    }
  }

  useEffect(() => {
    handleScroll()

    if (window) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }
  }, [])

  useEffect(() => {
    setPercentScrollPosition(
      Math.round((scrollPosition / maxScrollValue) * 100)
    )
  }, [scrollPosition, maxScrollValue])

  const isOnTop = percentScrollPosition > 0

  const MenuItem: React.FC<{ name: string; path: string }> = ({
    name,
    path
  }) => (
    <Link
      href={path}
      className="p-1 rounded-lg text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 hover:bg-neutral-200/50 hover:dark:bg-neutral-900"
    >
      {name}
    </Link>
  )

  return (
    <header
      className={`w-full fixed top-0 bg-neutral-100/80 dark:bg-neutral-1000/80 backdrop-blur-lg ${
        isOnTop ? 'py-3' : 'py-6'
      } duration-300 border-b ${
        isOnTop
          ? 'border-b-neutral-50 dark:border-b-neutral-800'
          : 'border-b-transparent'
      }`}
    >
      <div className="blog-content-w m-auto flex justify-between items-center">
        <Link href="/">
          <h1
            className={`text-blue-700 dark:text-blue-500 ${
              isOnTop ? 'font-medium' : 'font-base'
            } font-chivo-mono hover:cursor-pointer`}
          >
            Mateus Felipe
          </h1>
        </Link>
        <div className="flex justify-center items-center gap-8">
          <nav className="flex justify-center items-center gap-5">
            <MenuItem name="Home" path="/" />
            <MenuItem name="Categories" path="/categories" />
            <MenuItem name="Portifolio" path="/portifolio" />
          </nav>
          <ToggleTheme />
        </div>
      </div>
    </header>
  )
}
