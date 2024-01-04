import { useMDXComponent } from 'next-contentlayer/hooks'
import { DownloadSimple, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { allAbouts } from 'contentlayer/generated'

import { Title } from '@/shared/components/title'

import { ImageCard } from '../components/image-card'

export function AboutMe() {
  const MDXAboutContent = useMDXComponent(allAbouts[0].body.code)

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
        <div className="about-rendered-mdx flex flex-col gap-3 text-xl md:text-left">
          <MDXAboutContent />
        </div>
        <div className="mt-12 flex items-center justify-center gap-3 md:mt-6 md:flex-row-reverse md:justify-end">
          <a
            className="flex items-end justify-center rounded-xl p-2 leading-none underline opacity-70 hover:opacity-100"
            target="_blank"
            href="https://read.cv/mateusfelipe"
          >
            <span>read.cv</span>
            <ArrowUpRight className="text-xs" size="1em" />
          </a>
          <a
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-700/10 p-2 leading-none text-blue-700 hover:bg-blue-700 hover:text-white"
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
