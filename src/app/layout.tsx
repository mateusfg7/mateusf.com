import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, Caveat } from 'next/font/google'

import { config } from 'global-config'
import { Header } from './_components/header'
import { Footer } from './_components/footer'
import { Providers } from './providers'

import '~/styles/main.css'

export const metadata: Metadata = {
  ...config.metadata,
  metadataBase: new URL(config.webserver.host),
  title: {
    default: config.metadata.title,
    template: `%s • ${config.metadata.title}`
  },
  applicationName: config.metadata.title,
  authors: [
    { name: 'Mateus Felipe Gonçalves', url: 'https://github.com/mateusfg7' }
  ],
  category: 'Personal Website',
  keywords: [
    'personal',
    'blog',
    'homepage',
    'portfolio',
    'about',
    'me',
    'tech',
    'programming',
    'knowledge'
  ],
  robots: {
    follow: true,
    index: true
  },
  openGraph: {
    ...config.metadata,
    siteName: config.metadata.title,
    type: 'website',
    url: '/',
    emails: [
      'contact@mateusf.com',
      'contato@mateusf.com',
      'mateusfelipefg77@gmail.com',
      'mateusfg7@protonmail.com'
    ]
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

const dancingScript = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
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
        <Script
          async
          src="https://analytics.mateusf.com/script.js"
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        />
      </head>
      <body
        className={`scroll-smooth ${inter.variable} ${dancingScript.variable}`}
      >
        <Providers>
          <div className="relative">
            <Header />
            <div>{children}</div>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
