import React from 'react'

interface Props {
  gridArea: string
  title: string
  imgSrc: string
}

export const StatsTopic: React.FC<Props> = ({ imgSrc, title, gridArea }) => {
  return (
    <section className={`topic ${gridArea}`}>
      <header>
        <p>{title}</p>
      </header>

      <img src={imgSrc} />
    </section>
  )
}
