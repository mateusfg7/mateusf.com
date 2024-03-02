'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { ToggleTheme } from './toggle-theme'
import { MobileMenu } from './mobile-menu'
import { Search } from './search'

import signatureDark from './signature-dark.png'
import signatureLight from './signature-light.png'

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

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const percentScrollPosition = Math.round(
    (scrollPosition / maxScrollValue) * 100
  )

  return (
    <header
      data-on-top={percentScrollPosition === 0}
      className="fixed left-3 right-3 top-3 z-40 rounded-xl border border-neutral-100 bg-neutral-50/80 py-3 backdrop-blur transition-all dark:border-neutral-900 dark:bg-neutral-1000/80 md:left-0 md:right-0 md:top-0 md:w-full md:rounded-none md:border-x-0 md:border-b md:border-t-0 data-[on-top='false']:md:border-b-neutral-100 data-[on-top='true']:md:border-b-transparent data-[on-top='true']:md:py-6 data-[on-top='false']:md:dark:border-b-neutral-900/80"
    >
      <div className="content-container m-auto flex flex-wrap items-center justify-between">
        <div className="md:hidden" />
        <Link href="/">
          <Image
            src={signatureDark}
            alt="Mateus Felipe"
            className="w-16 dark:hidden"
          />
          <Image
            src={signatureLight}
            alt="Mateus Felipe"
            className="hidden w-16 dark:block"
          />
        </Link>
        <div className="hidden flex-wrap items-center justify-center gap-8 md:flex">
          <nav className="flex flex-wrap items-center justify-center gap-5">
            <MenuItem name="Home" path="/" />
            <MenuItem name="Blog" path="/blog" />
            <MenuItem name="Projects" path="/projects" />
            <MenuItem name="About" path="/about" />
            <MenuItem name="Guestbook" path="/guestbook" />
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
