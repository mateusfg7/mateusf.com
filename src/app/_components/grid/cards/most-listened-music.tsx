import { LastfmLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { getAlbumCover } from '~/lib/get-album-cover'
import { getLastFmTopTracks } from '~/lib/lastFm'

export async function MostListenedMusic() {
  const {
    name: title,
    artist,
    url
  } = await getLastFmTopTracks('1month').then(tracks => tracks[0])

  const cover = await getAlbumCover(`${title} - ${artist.name}`)

  return (
    <a
      target="_blank"
      className="relative flex h-36 transform-gpu items-center justify-center overflow-hidden rounded-lg bg-[#000] text-white duration-500 hover:scale-95"
      href={url}
    >
      <LastfmLogo
        size="1em"
        className="absolute left-0 top-0 text-[50px] text-red-800"
      />
      <div className="absolute bottom-0 right-5 top-0">
        <div className="side-text relative z-0 h-full font-extrabold leading-none text-white">
          <span className="absolute h-fit max-h-full truncate text-xl opacity-30">
            {artist.name}
          </span>
          <div className="truncate">{title}</div>
          <div className="truncate text-xs font-normal">
            Top listened this month
          </div>
        </div>
      </div>
      <Image
        src={cover.url}
        alt={title!}
        className="absolute -bottom-10 -left-14 -z-10 rounded-full blur-2xl"
        width={200}
        height={200}
      />
      <Image
        src={cover.url}
        alt={title!}
        className="absolute -bottom-12 -left-16 animate-spin overflow-hidden rounded-full animate-duration-[120s]"
        placeholder="empty"
        width={200}
        height={200}
      />
    </a>
  )
}
