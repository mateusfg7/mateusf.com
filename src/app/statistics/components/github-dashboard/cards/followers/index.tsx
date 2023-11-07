import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { FollowersComponent } from './component'
import { FollowersSkeleton } from './skeleton'
import { FollowersErrorComponent } from './error'

const AVATAR_COUNT = 119 // 12x14

export function Followers() {
  return (
    <ErrorBoundary fallback={<FollowersErrorComponent />}>
      <Suspense fallback={<FollowersSkeleton avatarCount={AVATAR_COUNT} />}>
        <FollowersComponent avatarCount={AVATAR_COUNT} />
      </Suspense>
    </ErrorBoundary>
  )
}
