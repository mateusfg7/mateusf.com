import { Playlist } from '@phosphor-icons/react/dist/ssr'

export function TopTracksSkeleton() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex flex-col leading-tight">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Top Tracks</span>
          <Playlist size="1em" weight="duotone" />
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-700">
          From last 3 months
        </span>
      </div>

      <div>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center justify-between gap-3 py-2">
            <div className="flex flex-1 animate-pulse flex-col space-y-[2px]">
              <span className="h-7 w-5/6 rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
              <span className="h-5 w-2/5 rounded-3xl bg-neutral-400 text-sm leading-tight dark:bg-neutral-800" />
            </div>
            <span className="h-5 w-14 animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
          </div>
        ))}
      </div>
    </div>
  )
}
