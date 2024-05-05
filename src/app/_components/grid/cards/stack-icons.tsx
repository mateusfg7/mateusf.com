import { IconType } from 'react-icons'

import { DockerIcon } from './icons/docker'
import { TypescriptIcon } from './icons/typescript'
import { HTML5Icon } from './icons/html'
import { CSS3Icon } from './icons/css'
import { ReactIcon } from './icons/react'
import { NextIcon } from './icons/next'
import { SvelteIcon } from './icons/svelte'
import { TailwindcssIcon } from './icons/tailwindcss'
import { ExpoIcon } from './icons/expo'
import { PythonIcon } from './icons/python'
import { RustIcon } from './icons/rust'
import { BashIcon } from './icons/bash'
import { NodeIcon } from './icons/node'
import { PrismaIcon } from './icons/prisma'
import { NestIcon } from './icons/nest'
import { HerokuIcon } from './icons/heroku'
import { LinuxIcon } from './icons/linux'
import { GoogleCloudIcon } from './icons/google-cloud'
import { VercelIcon } from './icons/vercel'
import { CloudflareIcon } from './icons/cloudflare'
import { FigmaIcon } from './icons/figma'

export type IconItem = {
  title: string
  icon: IconType
  color: string
}

type StackLine = {
  top: IconItem[]
  bottom: IconItem[]
}

export const stackLines: StackLine = {
  top: [
    { title: 'Typescript', icon: TypescriptIcon, color: '#3178C6' },
    { title: 'HTML5', icon: HTML5Icon, color: '#E34F26' },
    { title: 'CSS3', icon: CSS3Icon, color: '#1572B6' },
    { title: 'React.js', icon: ReactIcon, color: '#61DAFB' },
    { title: 'Next.js', icon: NextIcon, color: '#FFFFFF' },
    { title: 'Svelte', icon: SvelteIcon, color: '#FF3E00' },
    { title: 'Tailwind CSS', icon: TailwindcssIcon, color: '#06B6D4' },
    { title: 'React Native', icon: ReactIcon, color: '#61DAFB' },
    { title: 'Expo', icon: ExpoIcon, color: '#000020' },
    { title: 'Figma', icon: FigmaIcon, color: '#F24E1E' }
  ],
  bottom: [
    { title: 'Python', icon: PythonIcon, color: '#3776AB' },
    { title: 'Rust', icon: RustIcon, color: '#F74C00' },
    { title: 'Bash Script', icon: BashIcon, color: '#4EAA25' },
    { title: 'Node.js', icon: NodeIcon, color: '#339933' },
    { title: 'Prisma', icon: PrismaIcon, color: '#2D3748' },
    { title: 'Nest.js', icon: NestIcon, color: '#E0234E' },
    { title: 'Heroku', icon: HerokuIcon, color: '#430098' },
    { title: 'Docker', icon: DockerIcon, color: '#2496ED' },
    { title: 'Linux', icon: LinuxIcon, color: '#FCC624' },
    { title: 'Google Cloud', icon: GoogleCloudIcon, color: '#4285F4' },
    { title: 'Vercel', icon: VercelIcon, color: '#000000' },
    { title: 'Cloudflare', icon: CloudflareIcon, color: '#F38020' }
  ]
}
