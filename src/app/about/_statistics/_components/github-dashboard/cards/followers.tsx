import Image from 'next/image'

import { Heart } from '@phosphor-icons/react/dist/ssr'
import { placeholder } from '~/lib/placeholder'
import { shuffleArray } from '~/lib/shuffleArray'
import { getGithubFollowers, getGithubUserData } from '~/lib/github'

const AVATAR_COUNT = 71

export async function Followers() {
  const { followers: followersNumber } = await getGithubUserData()
  const followers = await getGithubFollowers()

  const slicedFollowers = shuffleArray(followers).slice(0, AVATAR_COUNT)

  return (
    <div className="flex h-full w-full flex-col justify-between gap-2 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Followers</span>
        <Heart size="1em" weight="duotone" />
      </span>
      <span className="text-xl">
        <div className="grid grid-cols-12 gap-1">
          {slicedFollowers.map(follower => (
            <a href={follower.html_url} key={follower.login} target="_blank">
              <Image
                src={follower.avatar_url}
                title={follower.login}
                alt=""
                width={400}
                height={400}
                placeholder={placeholder(28, 28) as `data:image/${string}`}
                className="w-7 rounded-full border-2 border-neutral-200 transition-all hover:border-neutral-600 dark:border-neutral-950 dark:hover:border-neutral-400"
              />
            </a>
          ))}
          <a
            href="https://github.com/mateusfg7?tab=followers&ref=https://mateusf.com"
            target="_blank"
            className="flex items-center justify-center text-sm leading-none transition-colors hover:underline"
          >
            +{followersNumber - AVATAR_COUNT}
          </a>
        </div>
      </span>
    </div>
  )
}
