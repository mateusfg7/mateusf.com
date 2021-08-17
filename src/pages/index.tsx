import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Terminal from '../components/Terminal'

interface Props {
  avatarUrl: string
}

const Home: React.FC<Props> = props => {
  return (
    <div className="type">
      <Head>
        <title>mateus-brain.bak</title>
      </Head>

      <div className="black-filter">
        <div className="center">
          <Terminal />
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
