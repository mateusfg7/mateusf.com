import { Course, courses } from '#content'
import { ArrowUpRight, Student } from '@phosphor-icons/react/dist/ssr'
import { formatDistance } from 'date-fns'
import { Date as DateDisplay } from '~/components/date'

const Ping = () => (
  <div className="absolute right-0 top-0">
    <div className="relative">
      <div className="absolute h-1 w-1 animate-ping rounded-full bg-green-400" />
      <div className="absolute h-1 w-1 rounded-full bg-green-400" />
    </div>
  </div>
)

function Work({ course }: { course: Course }) {
  const startDate = new Date(course.start)
  const endDate = new Date(course.end)
  const currDate = new Date()

  const isFinished = currDate >= endDate

  const time = formatDistance(startDate, endDate)

  return (
    <div className="space-y-3 py-6 first:pt-0 last:pb-0">
      <div className="relative space-y-3">
        {!isFinished && <Ping />}
        <div className="space-y-1 md:space-y-0">
          <span className="flex flex-wrap items-center gap-1 md:gap-3">
            <span className="font-medium md:text-lg">{course.title}</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {course.type}
            </span>
          </span>
          <span className="flex gap-2">
            <span className="text-neutral-600 dark:text-neutral-400">at</span>
            {course.institution.website ? (
              <a
                href={course.institution.website}
                target="_blank"
                className="group inline-flex items-center underline underline-offset-2 hover:no-underline"
              >
                <span>{course.institution.name}</span>
                <ArrowUpRight
                  size="0.8em"
                  className="block group-hover:block md:hidden"
                />
              </a>
            ) : (
              <span>{course.institution.name}</span>
            )}
          </span>
        </div>
        <div className="space-x-3">
          <span className="space-x-1">
            <DateDisplay
              dateString={startDate.toISOString()}
              dateFormat="LLL yyyy"
            />
            <span>-</span>
            {isFinished ? (
              <DateDisplay
                dateString={endDate.toISOString()}
                dateFormat="LLL yyyy"
              />
            ) : (
              <span className="text-neutral-500">
                <DateDisplay
                  dateString={endDate.toISOString()}
                  dateFormat="LLL yyyy"
                />
              </span>
            )}
          </span>
          <span className="text-neutral-600 dark:text-neutral-400">{time}</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-start gap-2 gap-y-1">
        {course.tags.map(tag => (
          <span
            key="tag"
            className="rounded-lg bg-neutral-100 px-1 text-sm text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Educational() {
  const sortedCourseList = courses.sort(
    (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
  )

  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-32">
      <div className="relative">
        <div className="flex items-center justify-center gap-1 text-xl font-medium md:sticky md:top-24 md:justify-start">
          <Student
            size="1em"
            className="text-neutral-600 dark:text-neutral-400"
            weight="duotone"
          />
          <span>Academic</span>
        </div>
      </div>
      <div className="flex-1 divide-y divide-neutral-200 dark:divide-neutral-800">
        {sortedCourseList.map(course => (
          <Work course={course} key={course.title} />
        ))}
      </div>
    </div>
  )
}
