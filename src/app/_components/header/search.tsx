import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { useKBar } from 'kbar'

export function Search() {
  const {
    query: { toggle }
  } = useKBar()

  return (
    <button
      onClick={toggle}
      className="flex flex-1 cursor-text items-center gap-5 rounded-xl bg-neutral-200/20 p-2 text-sm leading-none backdrop-blur-3xl dark:bg-neutral-800/20"
    >
      <span className="flex items-center gap-3">
        <MagnifyingGlass size="1em" />
        <span className="text-neutral-600 dark:text-neutral-400">
          Search...
        </span>
      </span>
      <kbd className="keyboard hidden md:flex">Ctrl K</kbd>
    </button>
  )
}
