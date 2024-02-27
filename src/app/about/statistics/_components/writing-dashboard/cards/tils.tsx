import { tils } from '#content'
import { Notebook } from '@phosphor-icons/react/dist/ssr'

export async function TILs() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>TILs</span>
        <Notebook size="1em" weight="duotone" />
      </span>
      <div className="flex h-full items-center text-2xl">{tils.length}</div>
    </div>
  )
}
