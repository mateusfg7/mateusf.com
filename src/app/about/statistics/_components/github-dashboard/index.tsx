import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { FallbackError } from '../fallback-error'

import { GithubStatsSkeleton } from './skeleton'
import { Followers } from './cards/followers'
import { Languages } from './cards/languages'
import { Repos } from './cards/repos'
import { Stars } from './cards/stars'
import { Commits } from './cards/commits'
import { ContributionCalendar } from './cards/contribution-calendar'
import { LineGraph } from './cards/line-graph'

export function GithubDashboard() {
  return (
    <ErrorBoundary fallback={<FallbackError />}>
      <Suspense fallback={<GithubStatsSkeleton />}>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <div className="col-span-2 row-span-2">
            <Followers />
          </div>

          <Stars />
          <Languages />
          <Repos />
          <Commits />

          <div className="col-span-4">
            <ContributionCalendar />
          </div>

          <div className="col-span-4">
            <LineGraph />
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}
