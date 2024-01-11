'use client'

import Giscus, { Theme } from '@giscus/react'
import { useAbsoluteTheme } from '@/shared/hooks/useAbsoluteTheme'

export function Comments() {
  const prefersColorScheme = useAbsoluteTheme()

  const theme: { [key: string]: Theme } = {
    dark: 'transparent_dark',
    light: 'light'
  }

  return (
    <Giscus
      repo="mateusfg7/mateusf.com"
      repoId="MDEwOlJlcG9zaXRvcnkzMTk0MDcwODI="
      category="Post Comments"
      categoryId="DIC_kwDOEwnD6s4CZvWA"
      mapping="og:title"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme[prefersColorScheme]}
      lang="en"
    />
  )
}
