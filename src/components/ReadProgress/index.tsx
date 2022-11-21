import React, { useEffect, useState } from 'react'

import { ProgressBar, PercentageProgress } from './styles'

export const ReadProgress: React.FC = () => {
  const [progressWidth, setProgressWith] = useState(0)

  const handleScroll = () => {
    const position = window.scrollY
    const pageY = document.body.offsetHeight - window.innerHeight

    setProgressWith((100 * position) / pageY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }, [])

  return (
    <>
      <ProgressBar width={progressWidth} />
      <PercentageProgress>{progressWidth.toFixed(2)}% Read</PercentageProgress>
    </>
  )
}
