import { GithubLogo } from '@phosphor-icons/react/dist/ssr'
import { getGithubRepositories } from '~/lib/github'

import { Card } from '../card'

export async function GithubStars() {
  const repos = await getGithubRepositories()

  const mine = repos.filter(repo => !repo.fork)
  const stars = mine.reduce((acc, curr) => acc + curr.stargazers_count, 0)

  return (
    <Card
      title="Github Stars"
      icon={<GithubLogo size="1em" weight="duotone" />}
      content={String(stars)}
    />
  )
}
