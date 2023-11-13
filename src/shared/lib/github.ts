import { ApiError } from '@/shared/errors/api-error'

const fetchInit: RequestInit = {
  next: {
    revalidate: 3600 // 1h
  }
}

type User = {
  followers: number
  public_repos: number
}

export async function getGithubUserData() {
  const githubUserRequest = await fetch(
    'https://api.github.com/users/mateusfg7',
    fetchInit
  )

  if (!githubUserRequest.ok) {
    console.log(githubUserRequest)
    throw new ApiError({
      message: githubUserRequest.statusText,
      status: githubUserRequest.status,
      url: githubUserRequest.url
    })
  }

  const result: User = await githubUserRequest.json()

  return result
}

export async function getGithubCommits() {
  const githubApiRequest = await fetch(
    'https://api.github.com/search/commits?q=author:mateusfg7',
    fetchInit
  )

  if (!githubApiRequest.ok) {
    console.log(githubApiRequest)
    throw new ApiError({
      message: githubApiRequest.statusText,
      status: githubApiRequest.status,
      url: githubApiRequest.url
    })
  }

  const response: {
    total_count: number
  } = await githubApiRequest.json()

  return response
}

type Follower = {
  login: string
  avatar_url: string
  html_url: string
}

export async function getGithubFollowers() {
  const { followers: followersNumber } = await getGithubUserData()

  const numberOfPages = Math.ceil(followersNumber / 100)

  let followers: Follower[] = []

  for (let index = 1; index <= numberOfPages; index++) {
    const githubFollowersRequest = await fetch(
      `https://api.github.com/users/mateusfg7/followers?per_page=100&page=${index}`,
      fetchInit
    )

    if (!githubFollowersRequest.ok) {
      console.log(githubFollowersRequest)
      throw new ApiError({
        message: githubFollowersRequest.statusText,
        status: githubFollowersRequest.status,
        url: githubFollowersRequest.url
      })
    }

    const list: Follower[] = await githubFollowersRequest.json()

    followers = [...followers, ...list]
  }

  return followers
}

type Repository = {
  language?: string
  stargazers_count: number
  fork: boolean
}

export async function getGithubRepositories() {
  const { public_repos: reposNumber } = await getGithubUserData()

  const numberOfPages = Math.ceil(reposNumber / 100)

  let repositories: Repository[] = []

  for (let index = 1; index <= numberOfPages; index++) {
    const githubRepositoriesRequest = await fetch(
      `https://api.github.com/users/mateusfg7/repos?per_page=100&page=${index}`,
      fetchInit
    )

    if (!githubRepositoriesRequest.ok) {
      console.log(githubRepositoriesRequest)
      throw new ApiError({
        message: githubRepositoriesRequest.statusText,
        status: githubRepositoriesRequest.status,
        url: githubRepositoriesRequest.url
      })
    }

    const list: Repository[] = await githubRepositoriesRequest.json()

    repositories = [...repositories, ...list]
  }

  return repositories
}
