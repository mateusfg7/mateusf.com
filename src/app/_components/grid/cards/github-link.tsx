// https://github.com/arnvgh/www/blob/main/components/misc/(home)/cards/gh-link.tsx

import Image from 'next/image'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr'

import catImg from './cat.jpg'

export const GithubLink = () => {
  return (
    <a
      className="group relative flex h-full w-full transform-gpu flex-col justify-between gap-5 overflow-hidden rounded-xl text-white transition-all duration-500 will-change-[outline,_transform] group-hover:scale-[.97] hover:scale-[.97] active:scale-100"
      href="http://github.com/mateusfg7"
      target="_blank"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <Image
          src={catImg}
          alt="cat img"
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
        ></span>
      </span>
      <span aria-hidden="true" className="px-6 pt-6">
        <span className="flex justify-between">
          <GithubLogo size="1em" className="text-xl" />
        </span>
      </span>
      <span className="space-y-0.5 px-6 pb-6">
        <span className="block font-semibold">GitHub</span>
        <span className="block text-sm">My experiments (aka projects)</span>
      </span>
    </a>
  )
}
