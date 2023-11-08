import { GithubLogo } from '@/shared/wrappers/phosphor-icons'
import { getGithubRepositories } from '@/shared/lib/github'

import { Card } from '../card'

export async function GithubStars() {
  const repos = await getGithubRepositories()

  const mine = repos.filter(repo => !repo.fork)
  const stars = mine.reduce((acc, curr) => acc + curr.stargazers_count, 0)

  return (
    <Card
      title="Github Stars"
      icon={<GithubLogo weight="duotone" />}
      content={String(stars)}
    />
  )
}
