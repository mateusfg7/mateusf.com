import { SpotifyLogo } from '@/shared/wrappers/phosphor-icons'

import { Card } from '../card'
import { getLastFmUserInfo } from '@/shared/lib/lastFm'

export async function SpotifyPlays() {
  const { playcount } = await getLastFmUserInfo()

  return (
    <Card
      title="Spotify Plays"
      icon={<SpotifyLogo weight="duotone" />}
      content={playcount}
    />
  )
}
