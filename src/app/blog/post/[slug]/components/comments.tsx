'use client'

import Giscus, { GiscusProps, Theme } from '@giscus/react'
import { useTheme } from 'next-themes'

export function Comments() {
  const theme: { [key: string]: Theme } = {
    system: 'preferred_color_scheme',
    dark: 'transparent_dark',
    light: 'light'
  }

  const { theme: currTheme } = useTheme()

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
      theme={theme[currTheme as string]}
      lang="en"
    />
  )
}
