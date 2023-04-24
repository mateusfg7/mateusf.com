import { BsBuilding } from 'react-icons/bs'
import {
  SiTypescript,
  SiReact,
  SiExpo,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiPrisma
} from 'react-icons/si'

export interface ProjectData {
  title: string
  image?: string
  core_techs: string[]
  description: string
  tags: string[]
  repository?: string
  files?: string
  website?: string
}

export const techIcons = {
  typescript: () => (
    <SiTypescript className="hover:text-[#358EF1]" title="typescript" />
  ),
  'react-native': () => (
    <SiReact className="hover:text-[#61DBFB]" title="react-native" />
  ),
  expo: () => <SiExpo title="expo" />,
  reactjs: () => <SiReact className="hover:text-[#61DBFB]" title="reactjs" />,
  nextjs: () => <SiNextdotjs title="nextjs" />,
  tailwindcss: () => (
    <SiTailwindcss className="hover:text-[#38BDF8]" title="tailwindcss" />
  ),
  vite: () => <SiVite className="hover:text-[#FFC119]" title="vitejs" />,
  nodejs: () => <SiNodedotjs className="hover:text-[#66CC33]" title="nodejs" />,
  prisma: () => <SiPrisma className="hover:text-[#4C51BF]" title="prisma" />,
  bricscad: () => <BsBuilding />
}

export const devProjects: ProjectData[] = [
  {
    title: 'Formatch',
    image:
      'https://raw.githubusercontent.com/mateusfg7/formatch/main/.github/thumbnail.png',
    core_techs: ['typescript', 'react-native', 'expo'],
    description:
      'Aplicativo que conecta você a um profissional da área de construção civil, e ainda te mantém informado sobre novidades do setor. ',
    tags: [
      'typescript',
      'react-native',
      'expo',
      'native-base',
      'phosphor-icons'
    ],
    repository: 'https://github.com/mateusfg7/formatch'
  },
  {
    title: 'Noisekun',
    image:
      'https://raw.githubusercontent.com/mateusfg7/Noisekun/main/.github/assets/thumbnail.png',
    core_techs: ['typescript', 'reactjs', 'nextjs', 'tailwindcss'],
    description:
      'Website para ouvir combinações de sons para relaxar e se tornar mais produtivo nas suas tarefas.',
    tags: ['typescript', 'reactjs', 'nextjs', 'tailwindcss', 'zustand', 'pwa'],
    repository: 'https://github.com/mateusfg7/Noisekun',
    website: 'https://noisekun.vercel.app'
  },
  {
    title: 'LMJ Automotive',
    image:
      'https://raw.githubusercontent.com/mateusfg7/lmj-automotive/main/.github/thumbnail.png',
    core_techs: ['typescript', 'reactjs', 'nextjs', 'tailwindcss'],
    description:
      'Website da LMJ Automotive, uma oficina mecânica que oferece serviço móvel. Empresa fictícia para o Projeto Final do curso de Aprendizado Industrial em Logística, na instituição SESI SENAI Dr. Celso Charuri - Pará de Minas MG.',
    tags: [
      'typescript',
      'reactjs',
      'nextjs',
      'tailwindcss',
      'react-icons',
      'tailwind-styled-components'
    ],
    repository: 'https://github.com/mateusfg7/lmj-automotive',
    website: 'https://www.lmjautomotive.com.br/'
  },
  {
    title: 'Feedget',
    image:
      'https://raw.githubusercontent.com/mateusfg7/nlw-return/main/.github/thumbnail.png',
    core_techs: ['typescript', 'reactjs', 'vite', 'nodejs', 'prisma'],
    description:
      'Feedget é um  widget para enviar feedbacks para o criador do conteúdo de uma página. O projeto foi desenvolvido durante a Next Level Week Return: Impulse, pela Rocketseat.',
    tags: [
      'typescript',
      'reactjs',
      'vite',
      'tailwindcss',
      'headlessui',
      'nodejs',
      'prisma',
      'jest',
      'nodemailer'
    ],
    repository: 'https://github.com/mateusfg7/nlw-return'
  },
  {
    title: 'Bolão da Copa',
    image:
      'https://raw.githubusercontent.com/mateusfg7/nlw-copa/main/.github/thumbnail.png',
    core_techs: [
      'typescript',
      'reactjs',
      'react-native',
      'nextjs',
      'nodejs',
      'prisma',
      'expo'
    ],
    description:
      'App para criar palpites de resultados dos jogos da FIFA World Cup 2022. Desenvolvido durante a NLW Copa, na semana do dia 31 ao dia 05 de novembro de 2022. by @Rocketseat',
    tags: [
      'typescript',
      'reactjs',
      'nextjs',
      'tailwindcss',
      'nodejs',
      'prisma',
      'fastify',
      'react-native',
      'expo'
    ],
    repository: 'https://github.com/mateusfg7/nlw-copa'
  }
]

export const civilProjects: ProjectData[] = [
  {
    title: 'Planta Baixa',
    image: 'https://i.imgur.com/Wpx9KQ6.jpg',
    core_techs: ['bricscad'],
    description:
      'Planta baixa e memorial descriptivo de uma casa com 360m², realizado no curso Técnico em Edificações na instituição SESI SENAI Dr. Celso Charuri, em Pará de Minas.',
    tags: ['planta baixa', 'cortes', 'memorial descritivo', 'bricscad'],
    files:
      'https://drive.google.com/drive/folders/1z3W5wV5wnzTLP4F3XyNogceVfQxAm7aB?usp=share_link'
  }
]
