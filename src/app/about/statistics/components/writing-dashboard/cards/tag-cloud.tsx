'use client'

import ReactWordcloud, { Word, Options, defaultOptions } from 'react-wordcloud'
import { Tag } from '@/shared/wrappers/phosphor-icons'
import { getTagsAndNumberOfPosts } from '@/shared/lib/tags'

export async function TagCloud() {
  // const words: Word[] = [
  //   {
  //     text: 'mateus',
  //     value: 10
  //   },
  //   {
  //     text: 'rust',
  //     value: 10
  //   },
  //   {
  //     text: 'deno',
  //     value: 6
  //   },
  //   {
  //     text: 'bun',
  //     value: 6
  //   },
  //   {
  //     text: 'node',
  //     value: 6
  //   },
  //   {
  //     text: 'next.js',
  //     value: 6
  //   },
  //   {
  //     text: 'felipe',
  //     value: 4
  //   },
  //   {
  //     text: 'svelte',
  //     value: 4
  //   },
  //   {
  //     text: 'vue',
  //     value: 4
  //   },
  //   {
  //     text: 'nest.js',
  //     value: 2
  //   },
  //   {
  //     text: 'python',
  //     value: 2
  //   }
  // ]

  const words: Word[] = getTagsAndNumberOfPosts().map(value => ({
    text: value.tag,
    value: value.numberOfPosts
  }))

  return (
    <div className="flex h-min w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Most Used Tags</span>
        <Tag weight="duotone" />
      </span>
      <div className="flex items-center text-2xl">
        <div className="dark:hidden">
          <ReactWordcloud
            words={words}
            options={{
              rotationAngles: [0, 0],
              rotations: 0,
              padding: 5,
              colors: ['#333']
            }}
          />
        </div>
        <div className="hidden h-full w-full dark:block">
          <ReactWordcloud
            words={words}
            options={{
              rotationAngles: [0, 0],
              rotations: 0,
              padding: 5,
              colors: ['#666']
            }}
          />
        </div>
      </div>
    </div>
  )
}
