import Image from 'next/image'
import { MusicNotes } from '@/shared/wrappers/phosphor-icons'
import { placeholder } from '@/shared/lib/placeholder'

import { Card } from '../../card'
import { ApiErrorMessage } from '../../api-error'

type Track = {
  artist: {
    '#text': string
  }
  name: string
  url: string
  image: {
    size: string
    '#text': string
  }[]
  date: {
    uts: string
    '#text': string
  }
}

type RecentTracks = {
  recenttracks: {
    track: Track[]
  }
}

export async function LastTrack() {
  const lastFmApiRequest = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mateusfg7&api_key=${process.env.LASTFM_API_KEY}&format=json`
  )

  if (!lastFmApiRequest.ok) {
    console.log(lastFmApiRequest)
    return <Card title="Last Played" content={<ApiErrorMessage />} />
  }

  const jsonResponse: RecentTracks = await lastFmApiRequest.json()

  const lastTrack = jsonResponse.recenttracks.track[0]

  return (
    <div className="flex h-full w-full items-center justify-between gap-2 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex h-full flex-1 flex-col overflow-hidden">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Last Played</span>
          <MusicNotes weight="duotone" />
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

export function LastTrackSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-between gap-2 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <div className="flex h-full w-full flex-col gap-1">
        <span className="inline-flex items-center gap-2 text-neutral-600">
          <span>Last Played</span>
          <MusicNotes weight="duotone" />
        </span>

        <div className="flex h-full items-center">
          <div className="h-6 w-2/3 animate-pulse rounded-3xl bg-neutral-400 text-3xl dark:bg-neutral-800" />
        </div>
      </div>
      <div className="h-11 w-14 animate-pulse rounded-xl bg-neutral-400 dark:bg-neutral-800 md:h-24 md:w-28 md:rounded-3xl" />
    </div>
  )
}
