import { UserList } from '@phosphor-icons/react/dist/ssr'

import { Artist, getLastFmTopArtists } from '~/lib/lastFm'

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
  const artists = await getLastFmTopArtists()

  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex flex-col leading-tight">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Top Artists</span>
          <UserList size="1em" weight="duotone" />
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-700">
          From last 6 months
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
