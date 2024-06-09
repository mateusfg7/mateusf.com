'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ToggleTheme } from './toggle-theme'
import { MobileMenu } from './mobile-menu'
import { Search } from './search'

const MenuItem: React.FC<{ name: string; path: string }> = ({ name, path }) => {
  const pathname = usePathname()
  const isHome = path === '/'
  const isActive = isHome ? path === pathname : pathname.startsWith(path)

  return (
    <Link
      href={path}
      data-active={isActive}
      className="rounded-lg p-2 leading-none text-neutral-500 data-[active='true']:text-neutral-900 hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-400 data-[active='true']:dark:text-neutral-100 hover:dark:bg-neutral-950 dark:hover:text-neutral-100"
    >
      {name}
    </Link>
  )
}

export function Header() {
  return (
    <header className="fixed top-0 z-40 w-full p-3">
      <div className="content-container m-auto flex items-center justify-between rounded-xl border border-neutral-200/50 bg-neutral-50/80 p-0 backdrop-blur-3xl transition-all dark:border-neutral-900 dark:bg-neutral-1000/80 md:px-5">
        <Link
          href="/"
          className="px-4 py-3 font-handwrite text-2xl font-bold drop-shadow-lg"
        >
          Mateus F.
        </Link>
        <div className="hidden w-full items-center gap-8 md:flex md:w-auto">
          <nav className="flex-wrap items-center justify-center gap-5">
            <MenuItem name="Home" path="/" />
            <MenuItem name="Blog" path="/blog" />
            <MenuItem name="Projects" path="/projects" />
            <MenuItem name="About" path="/about" />
            <MenuItem name="Guestbook" path="/guestbook" />
          </nav>
          <Search />
          <ToggleTheme />
        </div>
        <MobileMenu />
      </div>
    </header>
  )
}
