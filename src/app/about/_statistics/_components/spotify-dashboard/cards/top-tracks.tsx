import { Playlist } from '@phosphor-icons/react/dist/ssr'

import { TopTrack, getLastFmTopTracks } from '~/lib/lastFm'

const TrackItem = ({ track }: { track: TopTrack }) => (
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
  const tracks = await getLastFmTopTracks()

  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex flex-col leading-tight">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Top Tracks</span>
          <Playlist size="1em" weight="duotone" />
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-700">
          From last 6 months
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
