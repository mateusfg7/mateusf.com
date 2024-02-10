'use client'

import Giscus, { Theme, GiscusProps, Mapping } from '@giscus/react'
import { useAbsoluteTheme } from '~/hooks/useAbsoluteTheme'

type Props = Omit<GiscusProps, 'repo' | 'repoId' | 'mapping' | 'theme'> & {
  mapping?: Mapping
  transparentDark?: boolean
}
export function GiscusComments({
  category = 'Post Comments',
  categoryId = 'DIC_kwDOEwnD6s4CZvWA',
  reactionsEnabled = '1',
  inputPosition = 'bottom',
  mapping = 'og:title',
  ...rest
}: Props) {
  const prefersColorScheme = useAbsoluteTheme()

  const theme: { [key: string]: Theme } = {
    dark: 'https://mateusf.com/assets/giscus_dark.css',
    light: 'https://mateusf.com/assets/giscus_light.css'
  }

  return (
    <Giscus
      repo="mateusfg7/mateusf.com"
      repoId="MDEwOlJlcG9zaXRvcnkzMTk0MDcwODI="
      mapping={mapping}
      emitMetadata="0"
      lang="en"
      category={category}
      categoryId={categoryId}
      reactionsEnabled={reactionsEnabled}
      inputPosition={inputPosition}
      theme={theme[prefersColorScheme]}
      {...rest}
    />
  )
}
