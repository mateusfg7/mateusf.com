import { IconType } from 'react-icons'
import {
  SiAdobephotoshop,
  SiCss3,
  SiDeno,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastify,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiRust,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'

export interface Knowledge {
  icon: IconType
  title: string
  level: 'Avançado' | 'Intermediário' | 'Iniciante'
}

export const knowledgeCategories: {
  title: string
  knowledgeList: Knowledge[]
}[] = [
  {
    title: 'Linguagens de programação',
    knowledgeList: [
      {
        title: 'Javascript',
        level: 'Avançado',
        icon: SiJavascript
      },
      {
        title: 'Typescript',
        level: 'Avançado',
        icon: SiTypescript
      },
      {
        title: 'Python',
        level: 'Intermediário',
        icon: SiPython
      },
      {
        title: 'Rust',
        level: 'Iniciante',
        icon: SiRust
      }
    ]
  },
  {
    title: 'Desenvolvimento Web',
    knowledgeList: [
      {
        title: 'HTML5',
        level: 'Avançado',
        icon: SiHtml5
      },
      {
        title: 'CSS3',
        level: 'Avançado',
        icon: SiCss3
      },
      {
        title: 'React.js',
        level: 'Intermediário',
        icon: SiReact
      },
      {
        title: 'Next.js',
        level: 'Intermediário',
        icon: SiNextdotjs
      },
      {
        title: 'Tailwind CSS',
        level: 'Avançado',
        icon: SiTailwindcss
      },
      {
        title: 'Styled Component',
        level: 'Avançado',
        icon: SiStyledcomponents
      }
    ]
  },
  {
    title: 'Desenvolvimento Back-end | DevOps',
    knowledgeList: [
      {
        title: 'Node.js',
        level: 'Intermediário',
        icon: SiNodedotjs
      },
      {
        title: 'Deno',
        level: 'Iniciante',
        icon: SiDeno
      },
      {
        title: 'Prisma',
        level: 'Intermediário',
        icon: SiPrisma
      },
      {
        title: 'Express',
        level: 'Intermediário',
        icon: SiExpress
      },
      {
        title: 'Fastify',
        level: 'Iniciante',
        icon: SiFastify
      },
      {
        title: 'Nest.js',
        level: 'Iniciante',
        icon: SiNestjs
      },
      {
        title: 'NGINX',
        level: 'Iniciante',
        icon: SiNginx
      },
      {
        title: 'Docker',
        level: 'Intermediário',
        icon: SiDocker
      },
      {
        title: 'Linux',
        level: 'Intermediário',
        icon: SiLinux
      }
    ]
  },
  {
    title: 'Desenvolvimento Mobile e Outras Ferramentas',
    knowledgeList: [
      {
        title: 'React Native',
        level: 'Intermediário',
        icon: SiReact
      },
      {
        title: 'Expo',
        level: 'Intermediário',
        icon: SiExpo
      },
      {
        title: 'GIT',
        level: 'Avançado',
        icon: SiGit
      },
      {
        title: 'Github',
        level: 'Avançado',
        icon: SiGithub
      },
      {
        title: 'Figma',
        level: 'Intermediário',
        icon: SiFigma
      },
      {
        title: 'Photoshop',
        level: 'Intermediário',
        icon: SiAdobephotoshop
      }
    ]
  }
]
