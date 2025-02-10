import { MusicNotes } from '@phosphor-icons/react/dist/ssr'

export function TopTrackSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-between gap-2 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex h-full w-full flex-col gap-1">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Top Played</span>
          <MusicNotes size="1em" weight="duotone" />
        </span>

        <div className="flex h-full items-center">
          <div className="h-9 w-2/3 animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
        </div>
      </div>
      <div className="h-11 w-14 animate-pulse rounded-xl bg-neutral-400 dark:bg-neutral-800 md:h-24 md:w-28 md:rounded-3xl" />
    </div>
  )
}
