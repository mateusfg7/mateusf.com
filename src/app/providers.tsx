'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { GeistProvider } from '@geist-ui/core'
import { CustomKBarProvider } from '@/shared/components/kbar/provider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CustomKBarProvider>
        <GeistProvider>{children}</GeistProvider>
      </CustomKBarProvider>
    </ThemeProvider>
  )
}
