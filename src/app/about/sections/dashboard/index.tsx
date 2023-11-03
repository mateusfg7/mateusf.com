import { Suspense } from 'react'
import { AgeCard } from './cards/age'
import { GithubFollowers } from './cards/github-followers'
import { GithubStars } from './cards/github-stars'
import { LastTrack } from './cards/last-track'
import { SpotifyPlays } from './cards/spotify-plays'
import { TopArtist } from './cards/top-artist'
import { Card } from './card'
import { LoadingCard } from './loading-card'

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <AgeCard />

      <Suspense fallback={<LoadingCard />}>
        <GithubStars />
      </Suspense>

      <Suspense fallback={<LoadingCard />}>
        <GithubFollowers />
      </Suspense>

      <Suspense fallback={<LoadingCard />}>
        <SpotifyPlays />
      </Suspense>

      <Suspense fallback={<LoadingCard />}>
        <TopArtist />
      </Suspense>

      <Suspense fallback={<LoadingCard />}>
        <LastTrack />
      </Suspense>
    </div>
  )
}
