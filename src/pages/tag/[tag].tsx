import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import {
  getUniqueTagListFromPosts,
  getPostListBasedOnTag
} from '../../lib/tags'

import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { KnowledgeLink } from '../../components/KnowledgeLink'
import { Post } from 'contentlayer/generated'

interface Props {
  tag: string
  postList: Post[]
}

const Tag: React.FC<Props> = ({ tag, postList }) => {
  return (
    <div>
      <Head>
        <title>{tag} | mfg-b</title>
      </Head>
      <Container>
        <Header title={tag} />
        <main>
          {postList.map((post, key) => {
            return (
              <KnowledgeLink
                key={key}
                id={post.id}
                title={post.title}
                date={post.date}
                description={post.description}
              />
            )
          })}
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
    const postList = getPostListBasedOnTag(tag)

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
