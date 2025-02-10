import Image from 'next/image'
import { MusicNotes } from '@phosphor-icons/react/dist/ssr'

import { placeholder } from '~/lib/placeholder'
import { getLastFmTopTracks } from '~/lib/lastFm'
import { getAlbumCover } from '~/lib/get-album-cover'

export async function TopTrack() {
  const track = await getLastFmTopTracks('1month').then(tracks => tracks[0])

  const imageUrl = await getAlbumCover(
    `${track.name} - ${track.artist.name}`
  ).then(data => data.url)

  return (
    <div className="flex h-full w-full items-center justify-between gap-2 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex h-full flex-1 flex-col overflow-hidden">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Top Played</span>
          <MusicNotes size="1em" weight="duotone" />
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-700">
          From last month
        </span>
        <span className="flex h-full items-center">
          <a
            href={track.url}
            target="_blank"
            title={`${track.name} - ${track.artist['#text']}`}
            className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl hover:underline md:text-3xl"
          >
            {track.name} - {track.artist.name}
          </a>
        </span>
      </div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Artist Image"
          width={300}
          height={300}
          placeholder={placeholder(96, 96) as `data:image/${string}`}
          className="w-11 rounded-xl md:w-24 md:rounded-3xl"
        />
      )}
    </div>
  )
}
