import { MagnifyingGlass } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Keyboard } from '@/components/Keyboard'

export function Trigger() {
  return (
    <Dialog.Trigger asChild>
      <button className="flex flex-1 cursor-text items-center gap-5 rounded-xl bg-neutral-200/30 p-2 text-sm leading-none backdrop-blur-3xl dark:bg-neutral-800/30">
        <span className="flex items-center gap-3">
          <MagnifyingGlass />
          <span className="text-neutral-400">Search...</span>
        </span>
        <Keyboard keys={['Ctrl', 'K']} className="hidden md:flex" />
      </button>
    </Dialog.Trigger>
  )
}
