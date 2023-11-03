import { ApiErrorMessage } from '../api-error'
import { Card } from '../card'

type Artist = {
  name: string
  url: string
  playcount: string
}

type Artists = {
  topartists: {
    artist: Artist[]
  }
}

export async function TopArtist() {
  const lastFmApiRequest = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=mateusfg7&api_key=${process.env.LASTFM_API_KEY}&format=json`
  )

  if (!lastFmApiRequest.ok) {
    console.log(lastFmApiRequest)
    return <Card title="Top Artist" content={<ApiErrorMessage />} />
  }

  const jsonResponse: Artists = await lastFmApiRequest.json()

  const mostListened = jsonResponse.topartists.artist[0]

  return (
    <Card
      title="Top Artist"
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
