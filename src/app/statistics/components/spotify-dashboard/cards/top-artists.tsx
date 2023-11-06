import { Playlist, UserList } from '@/shared/wrappers/phosphor-icons'

import { ApiErrorMessage } from '../../api-error'
import { Card } from '../../card'

type Artist = {
  name: string
  playcount: string
  url: string
  image: {
    size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega'
    '#text': string
  }[]
}

type TopArtitsResponse = {
  topartists: {
    artist: Artist[]
  }
}

const ArtistItem = ({ artist }: { artist: Artist }) => (
  <div className="flex items-center justify-between gap-3 py-4">
    <a
      href={artist.url}
      target="_blank"
      className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-lg leading-normal hover:underline"
    >
      {artist.name}
    </a>
    <span className="text-neutral-500">{artist.playcount} plays</span>
  </div>
)

export async function TopArtists() {
  const lastFmApiRequest = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=mateusfg7&api_key=${process.env.LASTFM_API_KEY}&format=json&period=3month`
  )

  if (!lastFmApiRequest.ok) {
    console.log(lastFmApiRequest)
    return <Card title="Top Artists" content={<ApiErrorMessage />} />
  }

  const {
    topartists: { artist: artists }
  }: TopArtitsResponse = await lastFmApiRequest.json()

  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex flex-col leading-tight">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Top Artists</span>
          <UserList weight="duotone" />
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-700">
          From last 3 months
        </span>
      </div>

      <div>
        {artists.slice(0, 10).map(artist => (
          <ArtistItem key={artist.name} artist={artist} />
        ))}
      </div>
    </div>
  )
}

export function TopArtistsSkeleton() {
  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex flex-col leading-tight">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Top Artists</span>
          <UserList weight="duotone" />
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-700">
          From last 3 months
        </span>
      </div>

      <div>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center justify-between gap-3 py-4">
            <span className="h-7 w-2/3 animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
            <span className="h-5 w-14 animate-pulse rounded-3xl bg-neutral-400 dark:bg-neutral-800" />
          </div>
        ))}
      </div>
    </div>
  )
}
