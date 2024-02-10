import { getGithubRepositories } from '~/lib/github'
import { Star } from '@phosphor-icons/react/dist/ssr'

export async function Stars() {
  const repos = await getGithubRepositories()

  const mine = repos.filter(repo => !repo.fork)
  const stars = mine.reduce((acc, curr) => acc + curr.stargazers_count, 0)

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Stars</span>
        <Star size="1em" weight="duotone" />
      </span>
      <div className="flex h-full items-center text-2xl">{stars}</div>
    </div>
  )
}
