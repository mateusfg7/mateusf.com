import { CalendarBlank } from '@phosphor-icons/react/dist/ssr'

export function GraphSkeleton() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Contribution Graph</span>
        <CalendarBlank size="1em" weight="duotone" />
      </span>
      <div className="flex flex-col gap-2">
        <div className="h-28 w-full animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
        <div className="flex w-full justify-between">
          <div className="h-6 w-52 animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
          <div className="h-6 w-32 animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
        </div>
      </div>
    </div>
  )
}
