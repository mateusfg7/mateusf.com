import { Metadata } from 'next'
import { tils } from '#content'

import { Title } from '~/components/title'
import { TilItem } from '~/components/til-item'

import 'katex/dist/katex.min.css'

export const metadata: Metadata = {
  title: 'Today I Learned',
  description: 'Some notes with things that I learned on last days',
  keywords: ['learn', 'study', 'skills']
}

export default function Page() {
  return (
    <div className="content-container m-auto space-y-4">
      <Title text="Today I Learned" />
      <div className="flex flex-col gap-3">
        {tils
          .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
          .map(til => (
            <TilItem til={til} key={til.date} />
          ))}
      </div>
    </div>
  )
}
