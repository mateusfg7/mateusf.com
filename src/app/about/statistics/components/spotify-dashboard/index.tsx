import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { FallbackError } from '../fallback-error'

// import { LastTrack } from './cards/last-track'
import { TopTrack } from './cards/top-track'
import { TopTracks } from './cards/top-tracks'
import { TopArtists } from './cards/top-artists'

import { SpotifyStatsSkeleton } from './skeleton'

export function SpotifyDashboard() {
  return (
    <ErrorBoundary fallback={<FallbackError />}>
      <Suspense fallback={<SpotifyStatsSkeleton />}>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
          <div className="md:col-span-2">
            <TopTrack />
          </div>
          {/* <div className="md:col-span-2">
            <LastTrack />
          </div> */}

          <TopTracks />

          <TopArtists />
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}
