import { Playlist } from '@/shared/wrappers/phosphor-icons'

import { ApiErrorMessage } from '../../api-error'
import { Card } from '../../card'

type Track = {
  streamable: { fulltrack: string; '#text': string }
  name: string
  image: {
    size: 'small' | 'medium' | 'large' | 'extralarge'
    '#text': string
  }[]

  artist: {
    url: string
    name: string
  }
  url: string
  duration: string
  '@attr': { rank: string }
  playcount: string
}

type TopTracksResponse = {
  toptracks: {
    track: Track[]
  }
}

const TrackItem = ({ track }: { track: Track }) => (
  <div className="flex items-center justify-between gap-3 py-2">
    <div className="flex flex-1 flex-col overflow-hidden">
      <a
        href={track.url}
        target="_blank"
        className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-lg leading-normal hover:underline"
      >
        {track.name}
      </a>
      <a
        href={track.artist.url}
        target="_blank"
        className="text-sm leading-tight text-neutral-500 hover:underline"
      >
        {track.artist.name}
      </a>
    </div>
    <span className="text-neutral-500">{track.playcount} plays</span>
  </div>
)

export async function TopTracks() {
  const lastFmApiRequest = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=mateusfg7&api_key=${process.env.LASTFM_API_KEY}&format=json&period=3month`
  )

  if (!lastFmApiRequest.ok) {
    console.log(lastFmApiRequest)
    return <Card title="Top Tracks" content={<ApiErrorMessage />} />
  }

  const {
    toptracks: { track: tracks }
  }: TopTracksResponse = await lastFmApiRequest.json()

  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex flex-col leading-tight">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Top Tracks</span>
          <Playlist weight="duotone" />
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-700">
          From last 3 months
        </span>
      </div>

      <div>
        {tracks.slice(0, 10).map(track => (
          <TrackItem key={track.name} track={track} />
        ))}
      </div>
    </div>
  )
}

export function TopTracksSkeleton() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex flex-col leading-tight">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Top Tracks</span>
          <Playlist weight="duotone" />
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-700">
          From last 3 months
        </span>
      </div>

      <div>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center justify-between gap-3 py-2">
            <div className="flex flex-1 animate-pulse flex-col space-y-[2px]">
              <span className="h-7 w-5/6 rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
              <span className="h-5 w-2/5 rounded-3xl bg-neutral-400 text-sm leading-tight dark:bg-neutral-800" />
            </div>
            <span className="h-5 w-14 animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
          </div>
        ))}
      </div>
    </div>
  )
}
