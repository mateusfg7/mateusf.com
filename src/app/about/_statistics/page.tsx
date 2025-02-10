import { Metadata } from 'next'
import {
  GithubLogo,
  PencilLine,
  SpotifyLogo
} from '@phosphor-icons/react/dist/ssr'
import { Title } from '~/components/title'

import { GithubDashboard } from './_components/github-dashboard'
import { SpotifyDashboard } from './_components/spotify-dashboard'
import { WritingDashboard } from './_components/writing-dashboard'
import { RenderDate } from './_components/date'

export const metadata: Metadata = {
  title: 'Statistics',
  description:
    'Updated statistics data about me and my tastes. Github data, Spotify, and other things...',
  keywords: ['about', 'statistics', 'data']
}

export const revalidate = 3600 // 1h

export default function Page() {
  const date = new Date()

  return (
    <div className="content-container m-auto space-y-16">
      <Title text="Statistics" description={<RenderDate date={date} />} />
      <div className="space-y-5">
        <div className="flex w-full items-center justify-center gap-2 text-3xl font-semibold text-[#333] dark:text-[#f5f5f5] md:justify-start">
          <h2>Writing</h2>
          <PencilLine size="1em" weight="duotone" />
        </div>
        <WritingDashboard />
      </div>
      <div className="space-y-5">
        <div className="flex w-full items-center justify-center gap-2 text-3xl font-semibold text-[#333] dark:text-[#f5f5f5] md:justify-start">
          <h2>Github</h2>
          <GithubLogo size="1em" weight="duotone" />
        </div>
        <GithubDashboard />
      </div>
      <div className="space-y-5">
        <div className="flex w-full items-center justify-center gap-2 text-3xl font-semibold text-[#1db954] lg:justify-start">
          <h2>Spotify</h2>
          <SpotifyLogo size="1em" weight="duotone" />
        </div>
        <SpotifyDashboard />
      </div>
    </div>
  )
}
