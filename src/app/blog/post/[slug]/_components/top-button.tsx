'use client'

import { CaretUp } from '@phosphor-icons/react/dist/ssr'
import { useEffect, useState } from 'react'

export function TopButton() {
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

  const isNotOnTop = percentScrollPosition > 0

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      title="Go to top"
      className={`fixed bottom-7 right-7 hidden items-center justify-center rounded-full p-2 hover:bg-neutral-200 hover:dark:bg-neutral-950 md:flex ${
        isNotOnTop ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <CaretUp className="text-2xl" />
    </button>
  )
}
