'use client'

import {
  Code,
  FileDashed,
  PencilSimpleLine
} from '@/shared/wrappers/phosphor-icons'

export const DraftBadge = () => (
  <div className="common-badge border-amber-600/20 bg-amber-600/5 text-amber-600">
    <FileDashed /> Draft
  </div>
)

export const PlannedBadge = () => (
  <div className="common-badge border-sky-600/20 bg-sky-600/5 text-sky-600">
    <PencilSimpleLine /> Planned
  </div>
)

export const TestBadge = () => (
  <div className="common-badge border-green-600/20 bg-green-600/5 text-green-600">
    <Code /> Test
  </div>
)
