import React from 'react'

interface Props {
  gridArea: string
  title: string
  imgSrc: string
}

const StatsTopic: React.FC<Props> = ({ imgSrc, title, gridArea }) => {
  return (
    <section className={`topic ${gridArea}`}>
      <header>
        <p>{title}</p>
      </header>

      <img src={imgSrc} />
    </section>
  )
}

export default StatsTopic
