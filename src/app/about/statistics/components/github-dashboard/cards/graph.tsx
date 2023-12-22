import Image from 'next/image'
import { CalendarBlank } from '@phosphor-icons/react/dist/ssr'
import { placeholder } from '@/shared/lib/placeholder'

export function Graph() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Contribution Graph</span>
        <CalendarBlank weight="duotone" />
      </span>
      <div className="flex items-center">
        <Image
          src="https://contribution.catsjuice.com/_/mateusfg7?chart=calendar&format=png&quality=10&weeks=40&theme=native&widget_size=small"
          placeholder={placeholder(1992, 408) as `data:image/${string}`}
          alt="Contribution Graph"
          className="dark:hidden"
          width={1992}
          height={408}
        />
        <Image
          src="https://contribution.catsjuice.com/_/mateusfg7?chart=calendar&format=png&quality=1&weeks=40&theme=native&widget_size=small&dark=true"
          placeholder={placeholder(1992, 408) as `data:image/${string}`}
          alt="Contribution Graph"
          className="hidden dark:block"
          width={1992}
          height={408}
        />
      </div>
    </div>
  )
}
