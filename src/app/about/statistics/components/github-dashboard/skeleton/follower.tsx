import { Heart } from '@phosphor-icons/react/dist/ssr'

export const FollowersSkeleton = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-2 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Followers</span>
        <Heart size="1em" weight="duotone" />
      </span>
      <span className="text-xl">
        <div className="grid grid-cols-12 gap-1">
          {[...Array(71 + 1)].map((e, i) => (
            <div
              key={i}
              className="h-5 w-5 animate-pulse rounded-full border-2 border-neutral-200 bg-neutral-400 dark:border-neutral-950 dark:bg-neutral-800 md:h-7 md:w-7"
            />
          ))}
        </div>
      </span>
    </div>
  )
}
