import { ApiError } from '~/errors/api-error'
import { add, sub } from 'date-fns'

type User = {
  followers: number
  public_repos: number
}

export async function getGithubUserData() {
  const githubUserRequest = await fetch(
    'https://api.github.com/users/mateusfg7'
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
    'https://api.github.com/search/commits?q=author:mateusfg7'
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
      `https://api.github.com/users/mateusfg7/followers?per_page=100&page=${index}`
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
      `https://api.github.com/users/mateusfg7/repos?per_page=100&page=${index}`
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

// Function to calculate the productive data by days
function calculateMostProductiveDayOfWeek(contributionCalendar: {
  weeks: Week[]
}): { day: string; count: number }[] {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const contributionCountByDayOfWeek: {
    [day: string]: number
  } = {
    Sunday: 0,
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  }

  for (const week of contributionCalendar.weeks) {
    for (const day of week.contributionDays) {
      const date = new Date(day.date)
      const dayOfWeek = daysOfWeek[date.getUTCDay()]
      contributionCountByDayOfWeek[dayOfWeek] += day.contributionCount
    }
  }

  const sortedData = Object.entries(contributionCountByDayOfWeek)
    .sort((a, b) => daysOfWeek.indexOf(a[0]) - daysOfWeek.indexOf(b[0]))
    .map(([day, count]) => ({ day, count }))

  const sunday = sortedData.shift()

  if (sunday) {
    sortedData.push(sunday)
  }

  return sortedData
}

export type ContributionDay = {
  contributionCount: number
  date: string
  shortDate: string
}

type Week = {
  contributionDays: ContributionDay[]
}

export async function getGithubContribution() {
  const now = new Date()
  const from = sub(now, { days: 30 })
  // also include the next day in case our server is behind in time with respect to GitHub
  const to = add(now, { days: 1 })
  const query = {
    query: `
      query userInfo($LOGIN: String!, $FROM: DateTime!, $TO: DateTime!) {
        user(login: $LOGIN) {
          name
          contributionsCollection(from: $FROM, to: $TO) {
            contributionCalendar {
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      LOGIN: 'mateusfg7',
      FROM: from.toISOString(),
      TO: to.toISOString()
    }
  }

  const headers = new Headers({
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  })

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(query),
    headers
  })
  const apiResponse = await response.json()

  const userData: {
    contributions: ContributionDay[]
    name: string
  } = {
    contributions: [],
    name: apiResponse.data.user.name
  }

  const weeks =
    apiResponse.data.user.contributionsCollection.contributionCalendar.weeks
  weeks.map((week: Week) =>
    week.contributionDays.map((contributionDay: ContributionDay) => {
      contributionDay.shortDate = new Date(contributionDay.date)
        .getDate()
        .toString()
      userData.contributions.push(contributionDay)
    })
  )

  const contributionCountByDayOfWeek = calculateMostProductiveDayOfWeek(
    apiResponse.data.user.contributionsCollection.contributionCalendar
  )

  return { ...userData, contributionCountByDayOfWeek }
}
