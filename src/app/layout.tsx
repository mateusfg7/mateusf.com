import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'

import { config } from 'global-config'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Providers } from './providers'

import '@/styles/main.css'

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
    url: config.webserver.host
  },
  twitter: {
    ...config.metadata,
    card: 'summary_large_image'
  }
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="assets/brain.png" type="image/png" />
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        />
      </head>
      <body className={`scroll-smooth ${inter.variable}`}>
        <Providers>
          <Header />
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
