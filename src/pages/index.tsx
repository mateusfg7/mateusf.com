import React from 'react'
import Head from 'next/head'

import Terminal from '../components/Terminal'

const Home: React.FC = () => {
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
