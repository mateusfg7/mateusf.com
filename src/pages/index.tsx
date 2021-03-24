import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Container from '../components/Container/index'
import Header from '../components/Header/index'
import Main from '../components/Main/index'

interface Props {
  avatarUrl: string
}

const Home: React.FC<Props> = props => {
  return (
    <div>
      <Head>
        <title>My Blog</title>
      </Head>

      <Container>
        <Header imageUrl={props.avatarUrl} title="Home" />
        <Main>
          <h1>Home</h1>
        </Main>
      </Container>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      avatarUrl: 'https://github.com/mateusfg7.png'
    }
  }
}
