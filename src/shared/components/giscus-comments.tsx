'use client'

import Giscus, { Theme, GiscusProps } from '@giscus/react'
import { useAbsoluteTheme } from '@/shared/hooks/useAbsoluteTheme'

type Props = Omit<GiscusProps, 'repo' | 'repoId' | 'mapping'>
export function GiscusComments({
  category = 'Post Comments',
  categoryId = 'DIC_kwDOEwnD6s4CZvWA',
  reactionsEnabled = '1',
  inputPosition = 'bottom'
}: Props) {
  const prefersColorScheme = useAbsoluteTheme()

  const theme: { [key: string]: Theme } = {
    dark: 'transparent_dark',
    light: 'light'
  }

  return (
    <Giscus
      repo="mateusfg7/mateusf.com"
      repoId="MDEwOlJlcG9zaXRvcnkzMTk0MDcwODI="
      mapping="og:title"
      emitMetadata="0"
      lang="en"
      category={category}
      categoryId={categoryId}
      reactionsEnabled={reactionsEnabled}
      inputPosition={inputPosition}
      theme={theme[prefersColorScheme]}
    />
  )
}
