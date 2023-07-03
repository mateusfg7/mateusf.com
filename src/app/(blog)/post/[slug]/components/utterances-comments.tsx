'use client'

import { useEffect, useRef } from 'react'

export function UtterancesComments() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://utteranc.es/client.js'
    scriptElement.setAttribute('repo', 'mateusfg7/_mfg-b_articles')
    scriptElement.setAttribute('issue-term', 'og:title')
    scriptElement.setAttribute('label', 'comment')
    scriptElement.setAttribute('theme', 'preferred-color-scheme')
    scriptElement.crossOrigin = 'anonymous'
    scriptElement.async = true

    ref.current?.appendChild(scriptElement)
  }, [])

  return <div ref={ref} />
}
