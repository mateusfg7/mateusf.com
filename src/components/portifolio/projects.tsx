export interface ProjectData {
  title: string
  image?: string
  core_techs: {
    key: string
    icon: () => JSX.Element
  }[]
  description: string
  tags: string[]
  repository?: string
  files?: string
  website?: string
}

export const devProjects: ProjectData[] = [
  {
    title: 'Noisekun',
    image: 'https://github.com/mateusfg7.png',
    core_techs: [
      {
        key: 'typescript',
        icon: () => <span>[X]</span>
      },
      {
        key: 'nextjs',
        icon: () => <span>[X]</span>
      },
      {
        key: 'tailwind',
        icon: () => <span>[X]</span>
      }
    ],
    description:
      'Mateus felipe gonçalves mateus felipe gonçalves mateus felipe gonçalves mateus felipe gonçalves mateus felipe gonçalves mateus felipe gonçalves mateus felipe gonçalves.',
    tags: [
      'tailwind',
      'nextjs',
      'howler.js',
      'typescript',
      'javascript',
      'vercel'
    ],
    repository: 'https://github.com/mateusfg7/Noisekun',
    website: 'https://noisekun.vercel.app'
  },
  {
    title: 'Noisekun',
    image: 'https://github.com/mateusfg7.png',
    core_techs: [
      {
        key: 'typescript',
        icon: () => <span>[X]</span>
      },
      {
        key: 'nextjs',
        icon: () => <span>[X]</span>
      },
      {
        key: 'tailwind',
        icon: () => <span>[X]</span>
      }
    ],
    description:
      'Mateus felipe gonçalves mateus felipe gonçalves mateus felipe gonçalves mateus felipe gonçalves mateus felipe gonçalves mateus felipe gonçalves mateus felipe gonçalves.',
    tags: [
      'tailwind',
      'nextjs',
      'howler.js',
      'typescript',
      'javascript',
      'vercel'
    ],
    repository: 'https://github.com/mateusfg7/Noisekun',
    website: 'https://noisekun.vercel.app'
  }
]

export const civilProjects: ProjectData[] = [
  {
    title: 'Planta Baixa',
    core_techs: [
      {
        key: 'bricscad',
        icon: () => <span>[X]</span>
      }
    ],
    description:
      'Planta baixa de uma casa 300x300m realizado no curso Técnico em Edificações, na instituição SESI SENAI Dr. Celso Charuri, em Pará de Minas.',
    tags: ['planta baixa', 'cortes', 'carimbo-prefeitura', 'bricscad'],
    files: 'https://drive.google.com'
  }
]
