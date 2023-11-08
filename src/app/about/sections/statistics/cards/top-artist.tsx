import { SpotifyLogo } from '@/shared/wrappers/phosphor-icons'
import { getTopArtists } from '@/shared/lib/lastFm'

import { Card } from '../card'

export async function TopArtist() {
  const topArtists = await getTopArtists()
  const mostListened = topArtists[0]

  return (
    <Card
      title="Top Artist"
      icon={<SpotifyLogo weight="duotone" />}
      content={
        <a
          href={mostListened.url}
          target="_blank"
          title={mostListened.name}
          className="block overflow-hidden overflow-ellipsis whitespace-nowrap hover:underline"
        >
          {mostListened.name}
        </a>
      }
    />
  )
}
