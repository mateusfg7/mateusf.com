import { GitCommit } from '@phosphor-icons/react/dist/ssr'

export const CommitsSkeleton = () => (
  <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
    <span className="inline-flex items-center gap-2 text-neutral-600">
      <span>Repositories</span>
      <GitCommit size="1em" weight="duotone" />
    </span>
    <div className="h-7 w-1/2 animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
  </div>
)
