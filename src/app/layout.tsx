import type { Metadata, Viewport } from 'next'
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#060606' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' }
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1
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

          <div className="fixed left-0 top-10 -z-50 hidden h-64 w-64 bg-[url(/assets/robin-bird-bro.svg)] bg-contain bg-bottom bg-no-repeat opacity-10                                         dark:opacity-5 md:block " />

          <div className="fixed bottom-0 right-0 -z-50 hidden h-96 w-96 bg-[url(/assets/server-status-bro-light.svg)] bg-contain bg-bottom bg-no-repeat opacity-10 dark:bg-[url(/assets/server-status-bro-dark.svg)] dark:opacity-5 md:block " />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
