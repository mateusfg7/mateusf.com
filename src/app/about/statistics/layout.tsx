import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Statistics',
  description:
    'Updated statistics data about me and my tastes. Github data, Spotify, and other things...',
  keywords: ['about', 'statistics', 'data']
}

export const revalidate = 60 * 60 * 24 // 86400s = 24h = 1d

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
