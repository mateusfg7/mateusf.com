import Image from 'next/image'

import { Card } from '../card'
import { ApiErrorMessage } from '../api-error'
import { placeholder } from '../placeholder'

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
    <Card
      title="Last Played"
      content={
        <a
          href={lastTrack.url}
          target="_blank"
          title={`${lastTrack.name} - ${lastTrack.artist['#text']}`}
          className="flex items-center gap-1 hover:underline"
        >
          <Image
            src={lastTrack.image[3]['#text']}
            alt="Artist Image"
            width={300}
            height={300}
            placeholder={placeholder(24, 24) as `data:image/${string}`}
            className="w-6"
          />
          <span className="block overflow-hidden overflow-ellipsis whitespace-nowrap">
            {lastTrack.name} - {lastTrack.artist['#text']}
          </span>
        </a>
      }
    />
  )
}
