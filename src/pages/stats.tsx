import React from 'react'
import Head from 'next/head'

import StatsTopic from '../components/StatsTopic'
import { Container, Header, Main, Content } from '../styles/pages/stats'

const Stats: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Stats</title>
      </Head>

      <Header>
        <h1>My Scores</h1>
      </Header>

      <Main>
        <Content>
          <StatsTopic
            title="Github Status"
            imgSrc="https://github-readme-stats.vercel.app/api?username=mateusfg7&hide_title=true&hide_border=true&show_icons=true&title_color=000&icon_color=000&text_color=555"
            gridArea="status"
          />
          <StatsTopic
            title="Github Streak"
            imgSrc="https://github-readme-streak-stats.herokuapp.com?user=mateusfg7&hide_border=true&ring=FB8C012B&dates=555555"
            gridArea="streak"
          />
          <StatsTopic
            title="Github Trophy"
            imgSrc="https://github-profile-trophy.vercel.app/?username=mateusfg7"
            gridArea="trophy"
          />
          <StatsTopic
            title="Time Coding"
            imgSrc="https://github-readme-stats.vercel.app/api/wakatime?username=willianrod&layout=compact&hide_title=true&hide_border=true&show_icons=true&title_color=000&icon_color=555&text_color=000"
            gridArea="code-time"
          />
          <StatsTopic
            title="Github Languages"
            imgSrc="https://github-readme-stats.vercel.app/api/top-langs/?username=mateusfg7&layout=compact&hide_title=true&hide_border=true&show_icons=true&title_color=000&icon_color=555&text_color=000&langs_count=11&hide=html"
            gridArea="languages"
          />

        </Content>
      </Main>
    </Container>
  )
}

export default Stats
