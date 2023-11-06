import { Suspense } from 'react'

import { LastTrack, LastTrackSkeleton } from './cards/last-track'
import { TopTracks, TopTracksSkeleton } from './cards/top-tracks'
import { TopArtists, TopArtistsSkeleton } from './cards/top-artists'

export function SpotifyDashboard() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
      <div className="md:col-span-2">
        <Suspense fallback={<LastTrackSkeleton />}>
          <LastTrack />
        </Suspense>
      </div>

      <Suspense fallback={<TopTracksSkeleton />}>
        <TopTracks />
      </Suspense>

      <Suspense fallback={<TopArtistsSkeleton />}>
        <TopArtists />
      </Suspense>
    </div>
  )
}
