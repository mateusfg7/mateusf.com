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
      <Head>
        <title>My Blog</title>
      </Head>

      <div className="black-filter">
        <div className="center">
          <Header imageUrl={props.avatarUrl} title="Home" isHome />
        </div>
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
