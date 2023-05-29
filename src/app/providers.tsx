'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { GeistProvider } from '@geist-ui/core'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GeistProvider>{children}</GeistProvider>
    </ThemeProvider>
  )
}
