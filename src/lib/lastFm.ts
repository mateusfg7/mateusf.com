import { ApiError } from '~/errors/api-error'

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

type ImageSize = 'small' | 'medium' | 'large' | 'extralarge'
type Period = 'overall' | '7day' | '1month' | '3month' | '6month' | '12month'

type RecentTrack = {
  artist: {
    mbid: string
    '#text': string
  }
  streamable: '0' | '1'
  image: {
    size: ImageSize
    '#text': string
  }[]

  mbid: string
  album: { mbid: string; '#text': string }
  name: string
  url: string
  date: { uts: string; '#text': string }
}

type RecentTracksBody = {
  recenttracks: {
    track: RecentTrack[]
  }
}

export async function getLastFmRecentTracks() {
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

export async function getLastFmTopArtists() {
  const lastFmApiRequest = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=mateusfg7&api_key=${process.env.LASTFM_API_KEY}&format=json&period=6month`
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

export type TopTrack = {
  streamable: { fulltrack: '0' | '1'; '#text': '0' | '1' }
  mbid: string
  name: string
  image: {
    size: ImageSize
    '#text': string
  }[]
  artist: {
    url: string
    name: string
    mbid: string
  }
  url: string
  duration: string
  '@attr': { rank: string }
  playcount: string
}

type TopTracksBody = {
  toptracks: {
    track: TopTrack[]
  }
}

export async function getLastFmTopTracks(period: Period = '6month') {
  const lastFmApiRequest = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=mateusfg7&api_key=${process.env.LASTFM_API_KEY}&format=json&period=${period}`
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

type User = {
  name: string
  playcount: string
  url: string
}

export async function getLastFmUserInfo() {
  const lastFmApiRequest = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=mateusfg7&api_key=${process.env.LASTFM_API_KEY}&format=json`
  )

  if (!lastFmApiRequest.ok) {
    console.log(lastFmApiRequest)
    throw new ApiError({
      message: lastFmApiRequest.statusText,
      status: lastFmApiRequest.status,
      url: lastFmApiRequest.url
    })
  }

  const { user }: { user: User } = await lastFmApiRequest.json()

  return user
}
