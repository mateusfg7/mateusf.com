'use client'

import { ApiErrorMessage } from '../../../api-error'
import { Card } from '../../../card'

export function FollowersErrorComponent() {
  return (
    <Card
      title="Followers"
      content={
        <div className="flex h-full w-full items-center">
          <ApiErrorMessage />
        </div>
      }
    />
  )
}
