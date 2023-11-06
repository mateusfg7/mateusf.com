import { Star } from '@/shared/wrappers/phosphor-icons'

import { ApiErrorMessage } from '../../api-error'
import { Card } from '../../card'

type Repository = {
  stargazers_count: number
  fork: boolean
}

export async function Stars() {
  const githubApiRequest = await fetch(
    'https://api.github.com/users/mateusfg7/repos?per_page=200'
  )

  if (!githubApiRequest.ok) {
    console.log(githubApiRequest)
    return <Card title="Github Stars" content={<ApiErrorMessage />} />
  }

  const repos: Repository[] = await githubApiRequest.json()

  const mine = repos.filter(repo => !repo.fork)
  const stars = mine.reduce((acc, curr) => acc + curr.stargazers_count, 0)

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Stars</span>
        <Star weight="duotone" />
      </span>
      <div className="flex h-full items-center text-2xl">{stars}</div>
    </div>
  )
}

export const StarsSkeleton = () => (
  <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
    <span className="inline-flex items-center gap-2 text-neutral-600">
      <span>Stars</span>
      <Star weight="duotone" />
    </span>
    <div className="h-7 w-1/2 animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
  </div>
)
