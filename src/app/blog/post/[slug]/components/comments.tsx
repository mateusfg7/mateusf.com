'use client'

import Giscus, { Theme } from '@giscus/react'
import { useTheme } from 'next-themes'
import usePrefersColorScheme from 'use-prefers-color-scheme'

export function Comments() {
  const { theme: nextTheme } = useTheme()
  const colorScheme = usePrefersColorScheme()
  const isDarkMode =
    nextTheme === 'system' ? colorScheme === 'dark' : nextTheme == 'dark'

  const prefersColorScheme = isDarkMode ? 'dark' : 'light'

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
