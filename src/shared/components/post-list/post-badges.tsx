'use client'

import {
  Code,
  FileDashed,
  PencilSimpleLine
} from '@phosphor-icons/react/dist/ssr'

export const DraftBadge = () => (
  <div className="common-badge border-amber-600/20 bg-amber-600/5 text-amber-600">
    <FileDashed size="1em" /> Draft
  </div>
)

export const PlannedBadge = () => (
  <div className="common-badge border-sky-600/20 bg-sky-600/5 text-sky-600">
    <PencilSimpleLine size="1em" /> Planned
  </div>
)

export const TestBadge = () => (
  <div className="common-badge border-green-600/20 bg-green-600/5 text-green-600">
    <Code size="1em" /> Test
  </div>
)
