'use client'

import { CalendarBlank } from '@phosphor-icons/react/dist/ssr'
import GitHubCalendar from 'react-github-calendar'
import { useTheme } from 'next-themes'

export function ContributionCalendar() {
  const { theme } = useTheme()

  const colorScheme = theme !== 'dark' && theme !== 'light' ? undefined : theme

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Contribution Calendar</span>
        <CalendarBlank size="1em" weight="duotone" />
      </span>
      <div className="flex items-center">
        <GitHubCalendar
          username="mateusfg7"
          blockMargin={4}
          blockRadius={4}
          blockSize={13}
          colorScheme={colorScheme}
          style={{
            width: '100%'
          }}
        />
      </div>
    </div>
  )
}
