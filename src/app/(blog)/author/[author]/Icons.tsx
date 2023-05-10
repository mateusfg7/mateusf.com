'use client'

import {
  ArrowRight as ArrowIcon,
  Envelope as EnvelopeIcon,
  IconProps
} from '@phosphor-icons/react'
import React from 'react'

export const ArrowRight: React.FC<IconProps> = ({ ...props }) => (
  <ArrowIcon {...props} />
)

export const Envelope: React.FC<IconProps> = ({ ...props }) => (
  <EnvelopeIcon {...props} />
)
