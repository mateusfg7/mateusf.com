import { LastTrackSkeleton } from './last-track-skeleton'
import { TopArtistsSkeleton } from './top-artists.skeleton'
import { TopTracksSkeleton } from './top-tracks-skeleton'

export function SpotifyStatsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
      <div className="md:col-span-2">
        <LastTrackSkeleton />
      </div>

      <TopTracksSkeleton />
      <TopArtistsSkeleton />
    </div>
  )
}
