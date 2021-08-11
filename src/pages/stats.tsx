import React from 'react'
import Head from 'next/head'

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
          <section className="topic trophy">
            <header>
              <p>Github Trophy</p>
            </header>

            <img src="https://github-profile-trophy.vercel.app/?username=mateusfg7" />
          </section>

          <section className="topic streak">
            <header>
              <p>Github Streak</p>
            </header>


            <img src="https://github-readme-streak-stats.herokuapp.com?user=mateusfg7&hide_border=true&ring=FB8C012B&dates=555555" />
          </section>

          <section className="topic status">
            <header>
              <p>Github Status</p>
            </header>

            <img src="https://github-readme-stats.vercel.app/api?username=mateusfg7&hide_title=true&hide_border=true&show_icons=true&title_color=000&icon_color=000&text_color=555" />
          </section>
          <section className="topic languages">
            <header>
              <p>Github Languages</p>
            </header>

            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mateusfg7&layout=compact&hide_title=true&hide_border=true&show_icons=true&title_color=000&icon_color=555&text_color=000&langs_count=11&hide=html" />
          </section>

          <section className="topic code-time">
            <header>
              <p>Time Coding</p>
            </header>

            <img
              src="https://github-readme-stats.vercel.app/api/wakatime?username=willianrod&layout=compact&hide_title=true&hide_border=true&show_icons=true&title_color=000&icon_color=555&text_color=000"
              alt=""
            />
          </section>
        </Content>
      </Main>
    </Container>
  )
}

export default Stats
