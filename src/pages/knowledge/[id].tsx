import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { RiHistoryLine } from 'react-icons/ri'
import { FiTag } from 'react-icons/fi'

import { allPosts, type Post } from 'contentlayer/generated'

import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Date } from '../../components/Date'
import { ReadProgress } from '../../components/ReadProgress'

interface Props {
  post: Post
}

const Knowledge = ({ post }: Props) => {
  const tags = post.tags.split(',')
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>

      <ReadProgress />

      <Container>
        <Header title={post.id} />
        <main>
          <div className="py-4 px-0 leading-6 border-b border-neutral-500 mb-8">
            <h2 className="mb-2 font-bold text-xl">{post.title}</h2>
            <div>
              <p>
                <Date dateString={post.date} /> &#8226;{' '}
                <Link href={`/category/${post.category}`}>{post.category}</Link>
              </p>
              {post.lastUpdate && (
                <p
                  className="flex items-center gap-1 text-neutral-500"
                  title="Last Update"
                >
                  <Date dateString={post.lastUpdate} /> <RiHistoryLine />
                </p>
              )}
              <p className="flex flex-wrap gap-3 mt-1">
                {tags.map((tag, index) => (
                  <Link href={`/tag/${tag.trim()}`} key={index}>
                    <span className="flex items-center justify-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors duration-200 hover:cursor-pointe">
                      {tag} <FiTag size={15} />
                    </span>
                  </Link>
                ))}
              </p>
            </div>
          </div>
          <div className="post-content">
            <MDXContent />
          </div>
        </main>
      </Container>
    </div>
  )
}

export default Knowledge

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map(post => ({
      params: {
        id: post.id
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      post: allPosts.find(post => post.id === params?.id)
    }
  }
}
