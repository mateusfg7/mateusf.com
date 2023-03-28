import type { Metadata } from 'next'

import { Providers } from './providers'

import '../styles/main.css'

export const metadata: Metadata = {
  title: 'mfg-b',
  description: "Mateus Felipe's notes, articles, reflections and knowledge...",
  colorScheme: 'dark light',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'mfg-b',
    type: 'website',
    url: 'https://mfg-b.vercel.app/',
    description: "Mateus Felipe's notes, articles, reflections and knowledge..."
  },
  twitter: {
    title: 'mfg-b',
    card: 'summary_large_image',
    description: "Mateus Felipe's notes, articles, reflections and knowledge..."
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@500&family=Source+Sans+Pro:wght@300;400;600&family=Inter:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="assets/brain.png" type="image/png" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex/dist/katex.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="scroll-smooth">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
