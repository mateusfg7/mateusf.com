'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useGlitch } from 'react-powerglitch'

import { ToggleTheme } from './toggle-theme'
import { MobileMenu } from './mobile-menu'
import { Search } from './search'

export function Header() {
  const [percentScrollPosition, setPercentScrollPosition] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScrollValue, setMaxScrollValue] = useState(0)

  const glitch = useGlitch({
    timing: { duration: 5000, easing: 'ease-in' },
    glitchTimeSpan: { start: 0.5, end: 0.7 }
  })

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

  const isNotOnTop = percentScrollPosition > 0

  const MenuItem: React.FC<{ name: string; path: string }> = ({
    name,
    path
  }) => (
    <Link
      href={path}
      className="rounded-lg p-2 leading-none text-neutral-700 hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-300 hover:dark:bg-neutral-900 dark:hover:text-neutral-100"
    >
      {name}
    </Link>
  )

  return (
    <header
      className={`fixed top-3 left-3 right-3 z-10 rounded-xl bg-neutral-100/80 py-3 backdrop-blur-lg dark:bg-neutral-1000/80 md:top-0 md:right-0 md:left-0 md:w-full md:rounded-none ${
        isNotOnTop
          ? 'md:border-b-neutral-50 md:dark:border-b-neutral-800'
          : 'md:border-b-transparent md:py-6'
      } border border-neutral-50 dark:border-neutral-800 md:border-b md:border-none`}
    >
      <div className="content-container m-auto flex flex-wrap items-center justify-between">
        <div className="md:hidden" />
        <Link href="/">
          <h1
            ref={glitch.ref}
            className={`text-blue-700 dark:text-blue-500 ${
              isNotOnTop ? 'font-medium' : 'font-base'
            } font-chivo-mono hover:cursor-pointer`}
          >
            Mateus Felipe
          </h1>
        </Link>
        <div className="hidden flex-wrap items-center justify-center gap-8 md:flex">
          <nav className="flex flex-wrap items-center justify-center gap-5">
            <MenuItem name="Home" path="/" />
            <MenuItem name="Blog" path="/blog" />
            <MenuItem name="Projects" path="/projects" />
            <MenuItem name="About" path="/about" />
          </nav>
          <div className="flex w-full items-center gap-8 md:w-auto">
            <Search />
            <ToggleTheme />
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  )
}
