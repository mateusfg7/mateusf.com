import { GitCommit } from '@/shared/wrappers/phosphor-icons'

import { ApiErrorMessage } from '../../api-error'
import { Card } from '../../card'

type Data = {
  total_count: number
}

export async function Commits() {
  const githubApiRequest = await fetch(
    'https://api.github.com/search/commits?q=author:mateusfg7'
  )

  if (!githubApiRequest.ok) {
    console.log(githubApiRequest)
    return <Card title="Commits" content={<ApiErrorMessage />} />
  }

  const { total_count }: Data = await githubApiRequest.json()

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Commits</span>
        <GitCommit weight="duotone" />
      </span>
      <div className="flex h-full items-center text-2xl">{total_count}</div>
    </div>
  )
}

export const CommitsSkeleton = () => (
  <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
    <span className="inline-flex items-center gap-2 text-neutral-600">
      <span>Repositories</span>
      <GitCommit weight="duotone" />
    </span>
    <div className="h-7 w-1/2 animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
  </div>
)
