import Image from 'next/image'
import { MusicNotes } from '@phosphor-icons/react/dist/ssr'

import { placeholder } from '~/lib/placeholder'
import { getLastFmRecentTracks } from '~/lib/lastFm'

export async function LastTrack() {
  const recentTracks = await getLastFmRecentTracks()

  const lastTrack = recentTracks[0]

  return (
    <div className="flex h-full w-full items-center justify-between gap-2 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex h-full flex-1 flex-col overflow-hidden">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Last Played</span>
          <MusicNotes size="1em" weight="duotone" />
        </span>
        <span className="flex h-full items-center">
          <a
            href={lastTrack.url}
            target="_blank"
            title={`${lastTrack.name} - ${lastTrack.artist['#text']}`}
            className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl hover:underline md:text-3xl"
          >
            {lastTrack.name} - {lastTrack.artist['#text']}
          </a>
        </span>
      </div>
      <Image
        src={lastTrack.image[3]['#text']}
        alt="Artist Image"
        width={300}
        height={300}
        placeholder={placeholder(96, 96) as `data:image/${string}`}
        className="w-11 rounded-xl md:w-24 md:rounded-3xl"
      />
    </div>
  )
}
