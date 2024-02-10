import { GitCommit } from '@phosphor-icons/react/dist/ssr'
import { getGithubCommits } from '~/lib/github'

export async function Commits() {
  const { total_count } = await getGithubCommits()

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Commits</span>
        <GitCommit size="1em" weight="duotone" />
      </span>
      <div className="flex h-full items-center text-2xl">{total_count}</div>
    </div>
  )
}
