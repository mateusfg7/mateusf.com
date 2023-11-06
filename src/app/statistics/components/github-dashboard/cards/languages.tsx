import { Code } from '@/shared/wrappers/phosphor-icons'

import { ApiErrorMessage } from '../../api-error'
import { Card } from '../../card'

type Repository = {
  language?: string
}

export async function Languages() {
  const githubApiRequest = await fetch(
    'https://api.github.com/users/mateusfg7/repos?per_page=200'
  )

  if (!githubApiRequest.ok) {
    console.log(githubApiRequest)
    return <Card title="Languages" content={<ApiErrorMessage />} />
  }

  const repos: Repository[] = await githubApiRequest.json()

  const languages = repos
    .map(repo => repo.language)
    .filter(language => language)

  const languagesLength = [...new Set(languages)].length

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Languages</span>
        <Code weight="duotone" />
      </span>
      <div className="flex h-full items-center text-2xl">{languagesLength}</div>
    </div>
  )
}

export const LanguagesSkeleton = () => (
  <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
    <span className="inline-flex items-center gap-2 text-neutral-600">
      <span>Languages</span>
      <Code weight="duotone" />
    </span>
    <div className="h-7 w-1/2 animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
  </div>
)
