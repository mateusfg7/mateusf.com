'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false)

  const { setTheme, resolvedTheme } = useTheme()

  const isLight = resolvedTheme === 'light'
  const oppositeTheme = isLight ? 'dark' : 'light'

  const toggleTheme = () => setTheme(oppositeTheme)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button onClick={toggleTheme} className="p-1">
      {isLight ? (
        <FiMoon className="text-xl" title="Dark mode" />
      ) : (
        <FiSun className="text-xl" title="Light mode" />
      )}
    </button>
  )
}
