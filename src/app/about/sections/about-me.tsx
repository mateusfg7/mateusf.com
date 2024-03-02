import { DownloadSimple, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { aboutMe } from '#content'

import { Title } from '~/components/title'
import { MDXContent } from '~/components/mdx-content'

import { ImageCard } from '../_components/image-card'

export function AboutMe() {
  return (
    <div className="flex flex-col gap-3 md:flex-row-reverse">
      <div className="hidden md:block">
        <ImageCard />
      </div>
      <div className="md:flex-1">
        <Title text="About Me" />
        <div className="flex justify-center md:hidden">
          <ImageCard mobile />
        </div>
        <div className="about-rendered-mdx my-5 flex flex-col gap-3 text-xl md:text-left">
          <MDXContent code={aboutMe.content} />
        </div>
        <div className="mt-12 flex items-center justify-center gap-3 md:mt-6 md:flex-row-reverse md:justify-end">
          <a
            className="flex items-end justify-center rounded-xl p-2 leading-none underline opacity-70 hover:opacity-100"
            target="_blank"
            href="https://read.cv/mateusfelipe/?ref=https://mateusf.com"
          >
            <span>read.cv</span>
            <ArrowUpRight className="text-xs" size="1em" />
          </a>
          <a
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-700/10 p-2 leading-none text-blue-700 hover:bg-blue-700 hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
            target="_blank"
            href="/assets/cv-mateus-felipe.pdf"
          >
            Download CV <DownloadSimple size="1em" />
          </a>
        </div>
      </div>
    </div>
  )
}
