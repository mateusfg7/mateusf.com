import { getGithubRepositories } from '~/lib/github'
import { Code } from '@phosphor-icons/react/dist/ssr'

export async function Languages() {
  const repos = await getGithubRepositories()

  const languages = repos
    .map(repo => repo.language)
    .filter(language => language)

  const languagesLength = [...new Set(languages)].length

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Languages</span>
        <Code size="1em" weight="duotone" />
      </span>
      <div className="flex h-full items-center text-2xl">{languagesLength}</div>
    </div>
  )
}
