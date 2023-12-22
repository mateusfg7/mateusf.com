import { useMDXComponent } from 'next-contentlayer/hooks'
import { DownloadSimple } from '@phosphor-icons/react/dist/ssr'
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
        <div className="block md:hidden">
          <ImageCard mobile />
        </div>
        <div className="about-rendered-mdx flex flex-col gap-3 text-xl md:text-left">
          <MDXAboutContent />
        </div>
        <div className="mt-12 flex items-center justify-center gap-10 md:mt-6 md:justify-start">
          <a
            className="flex items-center justify-center gap-2 text-blue-500 hover:text-blue-300"
            target="_blank"
            href="/assets/cv-mateus-felipe.pdf"
          >
            Download CV <DownloadSimple />
          </a>
        </div>
      </div>
    </div>
  )
}
