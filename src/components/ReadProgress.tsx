'use client'

import React, { useEffect, useState } from 'react'

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
    <div
      className="fixed top-0 bg-black transition-all duration-300 rounded-md h-1"
      style={{
        width: `${progressWidth}%`
      }}
    />
  )
}
