import { ApiError } from '@/shared/errors/api-error'

export type Track = {
  name: string
  url: string
  duration: string
  playcount: string

  streamable: { fulltrack: string; '#text': string }
  image: {
    size: 'small' | 'medium' | 'large' | 'extralarge'
    '#text': string
  }[]
  date: {
    uts: string
    '#text': string
  }
  artist: {
    url: string
    name: string
    '#text': string
  }

  '@attr': { rank: string }
}

type RecentTracksBody = {
  recenttracks: {
    track: Track[]
  }
}

export async function getRecentTracks() {
  const lastFmApiRequest = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mateusfg7&api_key=${process.env.LASTFM_API_KEY}&format=json`
  )

  if (!lastFmApiRequest.ok) {
    console.log(lastFmApiRequest)
    throw new ApiError({
      message: lastFmApiRequest.statusText,
      status: lastFmApiRequest.status,
      url: lastFmApiRequest.url
    })
  }

  const {
    recenttracks: { track }
  }: RecentTracksBody = await lastFmApiRequest.json()

  return track
}

export type Artist = {
  name: string
  playcount: string
  url: string
  image: {
    size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega'
    '#text': string
  }[]
}

type TopArtistsBody = {
  topartists: {
    artist: Artist[]
  }
}

export async function getTopArtists() {
  const lastFmApiRequest = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=mateusfg7&api_key=${process.env.LASTFM_API_KEY}&format=json&period=3month`
  )

  if (!lastFmApiRequest.ok) {
    console.log(lastFmApiRequest)
    throw new ApiError({
      message: lastFmApiRequest.statusText,
      status: lastFmApiRequest.status,
      url: lastFmApiRequest.url
    })
  }

  const {
    topartists: { artist }
  }: TopArtistsBody = await lastFmApiRequest.json()

  return artist
}

type TopTracksBody = {
  toptracks: {
    track: Track[]
  }
}

export async function getTopTracks() {
  const lastFmApiRequest = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=mateusfg7&api_key=${process.env.LASTFM_API_KEY}&format=json&period=3month`
  )

  if (!lastFmApiRequest.ok) {
    console.log(lastFmApiRequest)
    throw new ApiError({
      message: lastFmApiRequest.statusText,
      status: lastFmApiRequest.status,
      url: lastFmApiRequest.url
    })
  }

  const {
    toptracks: { track: tracks }
  }: TopTracksBody = await lastFmApiRequest.json()

  return tracks
}
