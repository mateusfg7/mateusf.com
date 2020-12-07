import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Container from '../components/Container/index'
import Header from '../components/Header/index'

interface Props {
  avatarUrl: string
}

const Posts: React.FC<Props> = props => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>

      <Container>
        <Header imageUrl={props.avatarUrl} title="Posts" />
      </Container>
    </div>
  )
}

export default Posts

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      avatarUrl: 'https://avatars1.githubusercontent.com/u/40613276?v=4'
    }
  }
}
