import { Metadata } from 'next'
import { tils } from '#content'

import { Title } from '~/components/title'
import { TilList } from '~/components/til-list'

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
        <TilList tils={tils} />
      </div>
    </div>
  )
}
