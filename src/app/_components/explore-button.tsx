'use client'

import { useKBar } from 'kbar'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

export function ExploreButton() {
  const {
    query: { toggle }
  } = useKBar()

  return (
    <button
      onClick={toggle}
      className="group flex items-center gap-1 text-sm tracking-[.2em] opacity-60 hover:opacity-100 active:opacity-100"
    >
      <span className="hidden md:inline">Press</span>
      <kbd className="keyboard hidden tracking-normal opacity-90 md:inline">
        Ctrl K
      </kbd>
      <span className="inline md:hidden">Click</span>
      <span>to explore</span>

      <ArrowRight
        size="1em"
        className="duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:-translate-x-full md:opacity-0"
      />
    </button>
  )
}
