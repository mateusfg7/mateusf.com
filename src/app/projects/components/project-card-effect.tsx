'use client'

import { ReactNode } from 'react'
import Tilt from 'react-parallax-tilt'

export function ProjectCardEffect({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <Tilt
      className={className}
      tiltEnable={false}
      glarePosition="all"
      glareBorderRadius="1.5rem"
      glareMaxOpacity={0.05}
      glareEnable
    >
      {children}
    </Tilt>
  )
}
