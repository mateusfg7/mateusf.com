/* eslint-disable @next/next/no-img-element */
import { NextResponse } from 'next/server'
import { ImageResponse } from 'next/og'
import { FiFolder, FiCalendar, FiClock } from 'react-icons/fi'
import { posts } from '#content'

import { config } from 'global-config'
import { Date as DateFormatter } from '~/components/date'

export const runtime = 'nodejs'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const post = posts.find(post => post.slug === params.slug)

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  const currentHour = new Date().getHours()

  const theme = currentHour > 6 && currentHour < 18 ? 'light' : 'dark'

  const uiByTheme = {
    light: {
      bg: '#fff',
      text: '#000',
      serverImage:
        'https://raw.githubusercontent.com/mateusfg7/mateusf.com/cfc774a3020ea9815694f129951ef3f286701b13/public/assets/server-status-bro-light.svg'
    },
    dark: {
      bg: '#000',
      text: 'rgb(250,250,250)',
      serverImage:
        'https://raw.githubusercontent.com/mateusfg7/mateusf.com/cfc774a3020ea9815694f129951ef3f286701b13/public/assets/server-status-bro-dark.svg'
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          fontSize: '2rem',
          backgroundColor: uiByTheme[theme].bg,
          color: uiByTheme[theme].text
        }}
      >
        <img
          alt=""
          src="https://raw.githubusercontent.com/mateusfg7/mateusf.com/cfc774a3020ea9815694f129951ef3f286701b13/public/assets/robin-bird-bro.svg"
          style={{
            position: 'absolute',
            width: 300,
            left: 0,
            top: 60,
            opacity: 0.2
          }}
        />
        <img
          alt=""
          src={uiByTheme[theme].serverImage}
          style={{
            position: 'absolute',
            width: 350,
            right: 10,
            bottom: 0,
            opacity: 0.2
          }}
        />
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '4rem'
          }}
        >
          <div style={{ display: 'flex', fontSize: '4rem' }}>{post.title}</div>
          <div style={{ display: 'flex' }}>{post.description}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FiCalendar /> <DateFormatter dateString={post.date} />
              </span>
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FiFolder /> {post.category}
              </span>
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FiClock /> {Math.ceil(post.metadata.readingTime)} min read
              </span>
            </div>
            <span style={{ display: 'flex' }}>
              {config.webserver.host.split('//')[1]}
            </span>
          </div>
        </div>
      </div>
    ),
    // {
    //   width: 1200,
    //   height: 630
    // }
    {
      width: 1000,
      height: 525
    }
  )
}
