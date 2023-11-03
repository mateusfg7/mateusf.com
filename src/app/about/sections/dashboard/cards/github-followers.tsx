import Image from 'next/image'
import { Card } from '../card'
import { ApiErrorMessage } from '../api-error'

type User = {
  followers: number
}

type Follower = {
  login: string
  avatar_url: string
  html_url: string
}

export async function GithubFollowers() {
  const githubUserRequest = await fetch(
    'https://api.github.com/users/mateusfg7'
  )

  if (githubUserRequest.status !== 200) {
    console.log(githubUserRequest)
    return <Card title="Github Followers" content={<ApiErrorMessage />} />
  }

  const githubFollowersRequest = await fetch(
    'https://api.github.com/users/mateusfg7/followers?per_page=200'
  )

  if (githubFollowersRequest.status !== 200) {
    console.log(githubFollowersRequest)
    return <Card title="Github Followers" content={<ApiErrorMessage />} />
  }

  const followersList: Follower[] = await githubFollowersRequest.json()

  const shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const AVATAR_COUNT = 7

  const slicedFollowers: Follower[] = shuffle(followersList).slice(
    0,
    AVATAR_COUNT
  )

  const { followers }: User = await githubUserRequest.json()

  return (
    <>
      <Card
        title="Github Followers"
        content={
          <div className="flex items-center gap-2">
            <div className="flex flex-row-reverse justify-end">
              {slicedFollowers.map(follower => (
                <a
                  href={follower.html_url}
                  key={follower.login}
                  target="_blank"
                  className="-ml-3 last:m-0"
                >
                  <Image
                    src={follower.avatar_url}
                    title={follower.login}
                    alt=""
                    width={400}
                    height={400}
                    className="w-7 rounded-full border-2 border-neutral-200 transition-all hover:border-neutral-600 dark:border-neutral-950 dark:hover:border-neutral-400"
                  />
                </a>
              ))}
            </div>
            <a
              href="https://github.com/mateusfg7?tab=followers"
              target="_blank"
              className="text-base transition-colors hover:text-black dark:hover:text-white"
            >
              +{followers - AVATAR_COUNT}
            </a>
          </div>
        }
      />
    </>
  )
}
