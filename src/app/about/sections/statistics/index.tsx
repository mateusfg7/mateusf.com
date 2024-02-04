import { Suspense } from 'react'
import Link from 'next/link'
import { ErrorBoundary } from 'react-error-boundary'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

import { AgeCard } from './cards/age'
import { GithubFollowers } from './cards/github-followers'
import { GithubStars } from './cards/github-stars'
import { BlogPosts } from './cards/posts'
import { SpotifyPlays } from './cards/spotify-plays'
import { TopArtist } from './cards/top-artist'

import { GridSkeleton } from './grid-skeleton'

export function StatisticsGrid() {
  return (
    <ErrorBoundary fallback={<div />}>
      <Suspense fallback={<GridSkeleton />}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <AgeCard />
            <GithubStars />
            <GithubFollowers />
            <BlogPosts />
            <SpotifyPlays />
            <TopArtist />
          </div>
          <div className="flex justify-center md:justify-end">
            <Link
              href="/about/statistics"
              className="inline-flex items-end leading-none text-neutral-500 transition-colors hover:text-black dark:text-neutral-600 dark:hover:text-white"
            >
              <span>See more</span>
              <ArrowUpRight size="1em" className="text-xs" />
            </Link>
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}
