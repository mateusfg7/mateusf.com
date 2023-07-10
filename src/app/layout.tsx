import type { Metadata } from 'next'
import { config } from 'global-config'

import { Providers } from './providers'

import '@/styles/main.css'
import Script from 'next/script'

export const metadata: Metadata = {
  ...config.metadata,
  title: {
    default: config.metadata.title,
    template: `%s | ${config.metadata.title}`
  },
  colorScheme: 'dark light',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    ...config.metadata,
    type: 'website',
    url: config.webserver.host,
  },
  twitter: {
    ...config.metadata,
    card: 'summary_large_image',
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
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@500&family=Source+Sans+Pro:wght@300;400;600&family=Inter:wght@200;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="assets/brain.png" type="image/png" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex/dist/katex.css"
          crossOrigin="anonymous"
        />
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        />
      </head>
      <body className="scroll-smooth">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
