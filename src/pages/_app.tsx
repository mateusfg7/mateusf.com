import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider, useTheme } from 'next-themes'

import '../styles/main.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { theme } = useTheme()

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Head>
          <script
            async
            defer
            data-website-id="39d18d62-74c2-4bab-a2f8-a346b63d55b5"
            src="https://mateusfg7-umami-instance.herokuapp.com/umami.js"
          />

          <title>mfg-b</title>
          <meta name="color-scheme" content="dark light" />
          <meta
            name="theme-color"
            content={theme === 'light' ? '#F5F5F5' : '#171717'}
          />
          <meta name="title" content="mfg-b" />
          <meta
            name="description"
            content="Mateus Felipe's notes, articles, reflections and knowledge..."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mfg-b.vercel.app/" />
          <meta property="og:title" content="mfg-b" />
          <meta
            property="og:description"
            content="Mateus Felipe's notes, articles, reflections and knowledge..."
          />
          <meta
            property="og:image"
            content="https://github.com/mateusfg7.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://mfg-b.vercel.app/" />
          <meta property="twitter:title" content="mfg-b" />
          <meta
            property="twitter:description"
            content="Mateus Felipe's notes, articles, reflections and knowledge..."
          />
          <meta
            property="twitter:image"
            content="https://github.com/mateusfg7.png"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
