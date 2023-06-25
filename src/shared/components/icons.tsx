'use client'

import {
  CalendarBlank as CalendarBlankIcon,
  Clock as ClockIcon,
  FolderOpen as FolderOpenIcon,
  IconProps
} from '@/shared/lib/phosphor-icons'
import React from 'react'

export const CalendarBlank: React.FC<IconProps> = ({ ...props }) => (
  <CalendarBlankIcon {...props} />
)
export const Clock: React.FC<IconProps> = ({ ...props }) => (
  <ClockIcon {...props} />
)

export const FolderOpen: React.FC<IconProps> = ({ ...props }) => (
  <FolderOpenIcon {...props} />
)
