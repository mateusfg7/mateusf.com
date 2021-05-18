import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Container, LinksContainer } from '../styles/pages/map'

import { getSortedPostsData } from '../lib/posts'
import {
  CategoriesAndNumberOfPosts,
  getCategoriesAndNumberOfPosts
} from '../lib/categories'

interface Props {
  allPostData: PostData[]
  categories: CategoriesAndNumberOfPosts[]
}

const Map: React.FC<Props> = ({ allPostData, categories }) => {
  return (
    <div>
      <Head>
        <title>Page Map</title>
      </Head>

      <Container>
        <LinksContainer>
          <code>
            <a href="/">/</a>
          </code>
          <code>
            <a href="/posts">/posts</a>
          </code>
          <code>
            <a href="/post/react-native_notes_nlw5">
              /post/react-native_notes_nlw5
            </a>
          </code>
          <code>
            <a href="/post/react_notes_nlw5">/post/react_notes_nlw5</a>
          </code>
          <code>
            <a href="/post/elixir_notes_nlw5">/post/elixir_notes_nlw5</a>
          </code>
          <code>
            <a href="/post/sqlite3-with-python">/post/sqlite3-with-python</a>
          </code>
          <code>
            <a href="/post/learn-elixir-ep4">/post/learn-elixir-ep4</a>
          </code>
          <code>
            <a href="/post/learn-elixir-ep3">/post/learn-elixir-ep3</a>
          </code>
          <code>
            <a href="/post/learn-elixir-ep2">/post/learn-elixir-ep2</a>
          </code>
          <code>
            <a href="/post/learn-elixir-ep1">/post/learn-elixir-ep1</a>
          </code>
          <code>
            <a href="/post/oak-over-https">/post/oak-over-https</a>
          </code>
          <code>
            <a href="/post/neovim">/post/neovim</a>
          </code>
          <code>
            <a href="/post/learn-with-ethereum-ep2">
              /post/learn-with-ethereum-ep2
            </a>
          </code>
          <code>
            <a href="/post/learn-with-ethereum">/post/learn-with-ethereum</a>
          </code>
          <code>
            <a href="/post/draft-post">/post/draft-post</a>
          </code>
          <code>
            <a href="/categories">/categories</a>
          </code>
          <code>
            <a href="/category/React Native">/category/React Native</a>
          </code>
          <code>
            <a href="/category/Next.js">/category/Next.js</a>
          </code>
          <code>
            <a href="/category/Elixir">/category/Elixir</a>
          </code>
          <code>
            <a href="/category/Python">/category/Python</a>
          </code>
          <code>
            <a href="/category/Deno">/category/Deno</a>
          </code>
          <code>
            <a href="/category/Vim">/category/Vim</a>
          </code>
          <code>
            <a href="/category/Ethereum">/category/Ethereum</a>
          </code>
          <code>
            <a href="/category/Draft">/category/Draft</a>
          </code>
        </LinksContainer>
      </Container>
    </div>
  )
}

export default Map

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostData = getSortedPostsData()

  const categories = getCategoriesAndNumberOfPosts(allPostData)

  // Links

  console.log(`
    <code>
      <a href="/">/</a>
    </code>
    <code>
      <a href="/posts">/posts</a>
    </code>
    ${allPostData.map(
      post =>
        `<code>
          <a href="/post/${post.id}">/post/${post.id}</a>
        </code>`
    )}
    <code>
    <a href="/categories">/categories</a>
    </code>
    ${categories.map(
      categoryData =>
        `<code>
            <a href="/category/${categoryData.category}">/category/${categoryData.category}</a>
        </code>`
    )}

  `)

  return {
    props: {
      allPostData,
      categories
    }
  }
}
