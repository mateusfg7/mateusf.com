'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { CustomKBarProvider } from '~/components/kbar/provider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CustomKBarProvider>{children}</CustomKBarProvider>
    </ThemeProvider>
  )
}
