'use client'

import Giscus, { Theme } from '@giscus/react'
import usePrefersColorScheme from 'use-prefers-color-scheme'

export function Comments() {
  const prefersColorScheme = usePrefersColorScheme()

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
