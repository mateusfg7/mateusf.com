import { LastTrackSkeleton } from './last-track-skeleton'
import { TopArtistsSkeleton } from './top-artists.skeleton'
import { TopTrackSkeleton } from './top-track-skeleton'
import { TopTracksSkeleton } from './top-tracks-skeleton'

export function SpotifyStatsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
      {/* <div className="md:col-span-2">
        <LastTrackSkeleton />
      </div> */}
      <div className="md:col-span-2">
        <TopTrackSkeleton />
      </div>

      <TopTracksSkeleton />
      <TopArtistsSkeleton />
    </div>
  )
}
