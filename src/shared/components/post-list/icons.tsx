'use client'

import {
  CalendarBlank as CalendarBlankIcon,
  Clock as ClockIcon,
  IconProps
} from '@phosphor-icons/react'
import React from 'react'

export const CalendarBlank: React.FC<IconProps> = ({ ...props }) => (
  <CalendarBlankIcon {...props} />
)
export const Clock: React.FC<IconProps> = ({ ...props }) => (
  <ClockIcon {...props} />
)
