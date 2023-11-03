import { SpotifyLogo } from '@/shared/wrappers/phosphor-icons'

import { ApiErrorMessage } from '../api-error'
import { Card } from '../card'

type User = {
  name: string
  playcount: string
  url: 'https://www.last.fm/user/mateusfg7'
}

export async function SpotifyPlays() {
  const lastFmApiRequest = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=mateusfg7&api_key=${process.env.LASTFM_API_KEY}&format=json`
  )

  if (!lastFmApiRequest.ok) {
    console.log(lastFmApiRequest)
    return <Card title="Spotify Plays" content={<ApiErrorMessage />} />
  }

  const jsonResponse = await lastFmApiRequest.json()

  const lastFmUserData: User = jsonResponse.user

  return (
    <Card
      title="Spotify Plays"
      icon={<SpotifyLogo weight="duotone" />}
      content={lastFmUserData.playcount}
    />
  )
}
