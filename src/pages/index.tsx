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
    <div className="type">
      <div className="white-filter">
        <Head>
          <title>My Blog</title>
        </Head>

        <Container>
          <Header imageUrl={props.avatarUrl} title="Home" />
          <Main>
            <div className="center">
              <img src="/assets/typing.gif" alt="" />
            </div>
          </Main>
        </Container>
      </div>
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
