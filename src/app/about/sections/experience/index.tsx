import { Work, works } from '#content'
import { ArrowUpRight, Briefcase } from '@phosphor-icons/react/dist/ssr'
import { formatDistance } from 'date-fns'
import { Date as DateDisplay } from '~/components/date'

function WorkItem({ work }: { work: Work }) {
  let inDate = new Date(work.in)
  let outDate = work.out ? new Date(work.out) : new Date()

  const time = formatDistance(inDate, outDate)

  inDate.setMonth(inDate.getMonth() + 1)
  if (work.out) outDate.setMonth(outDate.getMonth() + 1)

  return (
    <div className="space-y-3 py-6 first:pt-0 last:pb-0">
      <div>
        <div className="flex flex-wrap gap-2 gap-y-0 text-lg">
          <span className="font-medium">{work.position}</span>
          <span className="text-neutral-600 dark:text-neutral-400">
            {work.company.name === 'Freelancer' ? 'as a' : 'at'}
          </span>
          {work.company.website ? (
            <a
              href={work.company.website}
              target="_blank"
              className="group inline-flex items-center underline underline-offset-2 hover:no-underline"
            >
              <span>{work.company.name}</span>
              <ArrowUpRight
                size="0.8em"
                className="block group-hover:block md:hidden"
              />
            </a>
          ) : (
            <span>{work.company.name}</span>
          )}
        </div>
        <div className="space-x-3">
          <span className="space-x-1">
            <DateDisplay
              dateString={inDate.toISOString()}
              dateFormat="LLL yyyy"
            />
            <span>-</span>
            {work.out ? (
              <DateDisplay
                dateString={outDate.toISOString()}
                dateFormat="LLL yyyy"
              />
            ) : (
              <span className="text-green-700 dark:text-green-600">Now</span>
            )}
          </span>
          <span className="text-neutral-600 dark:text-neutral-400">{time}</span>
        </div>
      </div>
      <div className="text-neutral-600 dark:text-neutral-400">
        {work.description}
      </div>
    </div>
  )
}

export function Experience() {
  const sortedWorkList = works.sort(
    (a, b) => new Date(b.in).getTime() - new Date(a.in).getTime()
  )

  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-32">
      <div className="relative">
        <div className="flex items-center justify-center gap-1 text-xl font-medium md:sticky md:top-24 md:justify-start">
          <Briefcase
            size="1em"
            className="text-neutral-600 dark:text-neutral-400"
            weight="duotone"
          />
          <span>Experience</span>
        </div>
      </div>
      <div className="flex-1 divide-y divide-neutral-200 dark:divide-neutral-800">
        {sortedWorkList.map(work => (
          <WorkItem work={work} key={work.position} />
        ))}
      </div>
    </div>
  )
}
