import { NextResponse } from 'next/server'
import { ImageResponse } from 'next/og'
import { FiFolder, FiCalendar, FiClock } from 'react-icons/fi'
import { allPosts } from 'contentlayer/generated'
import { Date } from '@/shared/components/date'
import { config } from 'global-config'

export const runtime = 'edge'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const post = allPosts.find(post => post.id === params.slug)

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          fontSize: '2rem',
          backgroundImage:
            'linear-gradient(to bottom, rgb(15,0,0), rgb(0,0,0))',
          color: 'rgb(250,250,250)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            display: 'flex',
            height: '100%',
            width: '100%',
            backgroundImage:
              'linear-gradient(to right, transparent, rgb(0,0,25))'
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', fontSize: '4rem' }}>
              {post.title}
            </div>
            <div style={{ display: 'flex', fontSize: '1.5rem' }}>
              by {post.author_info.name} {'<'}
              {post.author_info.email}
              {'>'}
            </div>
          </div>
          <div style={{ display: 'flex' }}>{post.description}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FiCalendar /> <Date dateString={post.date} />
              </span>
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FiFolder /> {post.category}
              </span>
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FiClock /> {Math.ceil(post.reading_time.minutes)} min read
              </span>
            </div>
            <span style={{ display: 'flex' }}>
              {config.webserver.host.split('//')[1]}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}
