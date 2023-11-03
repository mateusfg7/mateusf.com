import { Card } from '../card'

type Repository = {
  stargazers_count: number
  fork: boolean
}

export async function GithubStars() {
  const githubApiRequest = await fetch(
    'https://api.github.com/users/mateusfg7/repos?per_page=200'
  )

  const repos: Repository[] = await githubApiRequest.json()

  const mine = repos.filter(repo => !repo.fork)
  const stars = mine.reduce((acc, curr) => acc + curr.stargazers_count, 0)

  return <Card title="Github Stars" content={String(stars)} />
}
