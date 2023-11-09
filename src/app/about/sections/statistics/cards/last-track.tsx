import Image from 'next/image'

import { SpotifyLogo } from '@/shared/wrappers/phosphor-icons'

import { getLastFmRecentTracks } from '@/shared/lib/lastFm'
import { placeholder } from '@/shared/lib/placeholder'

import { Card } from '../card'

export async function LastTrack() {
  const recentTracks = await getLastFmRecentTracks()
  const lastTrack = recentTracks[0]

  return (
    <Card
      title="Last Played"
      icon={<SpotifyLogo weight="duotone" />}
      content={
        <a
          href={lastTrack.url}
          target="_blank"
          title={`${lastTrack.name} - ${lastTrack.artist['#text']}`}
          className="flex w-full items-center justify-center gap-1 hover:underline lg:justify-start"
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
