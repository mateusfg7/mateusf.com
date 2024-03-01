import Image from 'next/image'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr'

import { getGithubFollowers } from '~/lib/github'
import { shuffleArray } from '~/lib/shuffleArray'
import { placeholder } from '~/lib/placeholder'

import { Card } from '../card'

export async function GithubFollowers() {
  const AVATAR_COUNT = 8

  const followersList = await getGithubFollowers()
  const slicedFollowers = shuffleArray(followersList).slice(0, AVATAR_COUNT)

  return (
    <>
      <Card
        title="Github Followers"
        icon={<GithubLogo size="1em" weight="duotone" />}
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
                    placeholder={placeholder(28, 28) as `data:image/${string}`}
                    className="w-7 rounded-full border-2 border-neutral-200 transition-all hover:border-neutral-600 dark:border-neutral-950 dark:hover:border-neutral-400"
                  />
                </a>
              ))}
            </div>
            <a
              href="https://github.com/mateusfg7?tab=followers&ref=https://mateusf.com"
              target="_blank"
              className="text-base transition-colors hover:text-black dark:hover:text-white"
            >
              +{followersList.length - AVATAR_COUNT}
            </a>
          </div>
        }
      />
    </>
  )
}
