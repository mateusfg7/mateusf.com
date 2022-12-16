import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import {
  getUniqueTagListFromPosts,
  getPostListBasedOnTag
} from '../../lib/tags'

import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { KnowledgeList } from 'src/components/KnowledgeList'

import { Post } from 'contentlayer/generated'
import { getSortedPosts } from 'src/lib/getSortedPosts'

interface Props {
  tag: string
  postList: Post[]
}

const Tag: React.FC<Props> = ({ tag, postList }) => {
  return (
    <div>
      <Head>
        <meta name="description" content={`Posts with tag ${tag}`} />
        <meta name="title" content={`mfg-b | ${tag}`} />

        <meta property="og:title" content={`mfg-b | ${tag}`} />
        <meta property="og:description" content={`Posts with tag ${tag}`} />

        <meta property="twitter:title" content={`mfg-b | ${tag}`} />
        <meta
          property="twitter:description"
          content={`Posts with tag ${tag}`}
        />
        <title>mfg-b | {tag}</title>
      </Head>
      <Container>
        <Header title={tag} isMainTitle />
        <main>
          <KnowledgeList posts={postList} />
        </main>
      </Container>
    </div>
  )
}

export default Tag

export const getStaticPaths: GetStaticPaths = async () => {
  const tagList = getUniqueTagListFromPosts()

  const paths = tagList.map(tag => ({ params: { tag } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params.tag

  if (typeof tag === 'string') {
    const postList = getSortedPosts(getPostListBasedOnTag(tag))

    return {
      props: {
        tag,
        postList
      }
    }
  }

  return {
    props: {}
  }
}
