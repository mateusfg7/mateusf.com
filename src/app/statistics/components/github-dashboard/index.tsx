import { Suspense } from 'react'

import { Followers } from './cards/followers'
import { Languages, LanguagesSkeleton } from './cards/languages'
import { Repos, ReposSkeleton } from './cards/repos'
import { Stars, StarsSkeleton } from './cards/stars'
import { Commits, CommitsSkeleton } from './cards/commits'
import { Graph } from './cards/graph'

export function GithubDashboard() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
      <div className="col-span-2 row-span-3">
        <Followers />
      </div>

      <Suspense fallback={<StarsSkeleton />}>
        <Stars />
      </Suspense>
      <Suspense fallback={<LanguagesSkeleton />}>
        <Languages />
      </Suspense>
      <Suspense fallback={<ReposSkeleton />}>
        <Repos />
      </Suspense>
      <Suspense fallback={<CommitsSkeleton />}>
        <Commits />
      </Suspense>

      <div className="col-span-2">
        <Graph />
      </div>
    </div>
  )
}
