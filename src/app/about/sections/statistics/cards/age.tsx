'use client'

import { useState } from 'react'
import { Card } from '../card'

export function AgeCard() {
  const diffCalc = () => {
    const diff =
      (new Date().getTime() - new Date('August 22, 2002').getTime()) /
      1000 /
      60 /
      60 /
      24 /
      365
    return diff.toFixed(9)
  }

  const [age, setAge] = useState(diffCalc())

  setInterval(() => {
    setAge(diffCalc())
  }, 100)

  return <Card title="My Age" content={age} />
}
