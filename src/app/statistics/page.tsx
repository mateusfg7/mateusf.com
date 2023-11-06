import { GithubLogo, SpotifyLogo } from '@/shared/wrappers/phosphor-icons'
import { Title } from '@/shared/components/title'

import { GithubDashboard } from './components/github-dashboard'
import { SpotifyDashboard } from './components/spotify-dashboard'

export default function Page() {
  return (
    <div className="content-container m-auto space-y-16">
      <Title text="Statistics" />
      <div className="space-y-5">
        <div className="flex w-full items-center justify-center gap-2 text-3xl font-semibold text-[#333] dark:text-[#f5f5f5] md:justify-start">
          <h2>Github</h2>
          <GithubLogo weight="duotone" />
        </div>
        <GithubDashboard />
      </div>
      <div className="space-y-5">
        <div className="flex w-full items-center justify-center gap-2 text-3xl font-semibold text-[#1db954] lg:justify-start">
          <h2>Spotify</h2>
          <SpotifyLogo weight="duotone" />
        </div>
        <SpotifyDashboard />
      </div>
    </div>
  )
}
