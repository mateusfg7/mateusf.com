import { ChartLine } from '@phosphor-icons/react/dist/ssr'
import { getGithubContribution } from '~/lib/github'
import { Chart } from './chart'

export async function LineGraph() {
  const githubActivity = await getGithubContribution()

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex flex-col leading-none">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Contribution Graph</span>
          <ChartLine size="1em" weight="duotone" />
        </span>
        <span className="text-xs text-neutral-600/50">from last 31 days</span>
      </div>
      <div className="flex h-full items-center">
        <Chart data={githubActivity.contributions} />
      </div>
    </div>
  )
}
