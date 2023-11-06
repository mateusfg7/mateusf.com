import { Cube } from '@/shared/wrappers/phosphor-icons'

import { ApiErrorMessage } from '../../api-error'
import { Card } from '../../card'

type User = {
  public_repos: number
}

export async function Repos() {
  const githubApiRequest = await fetch('https://api.github.com/users/mateusfg7')

  if (!githubApiRequest.ok) {
    console.log(githubApiRequest)
    return <Card title="Repositories" content={<ApiErrorMessage />} />
  }

  const { public_repos }: User = await githubApiRequest.json()

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Repositories</span>
        <Cube weight="duotone" />
      </span>
      <div className="flex h-full items-center text-2xl">{public_repos}</div>
    </div>
  )
}

export const ReposSkeleton = () => (
  <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
    <span className="inline-flex items-center gap-2 text-neutral-600">
      <span>Repositories</span>
      <Cube weight="duotone" />
    </span>
    <div className="h-7 w-1/2 animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
  </div>
)
