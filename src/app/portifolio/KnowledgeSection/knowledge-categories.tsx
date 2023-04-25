import { IconType } from 'react-icons'
import {
  SiAdobephotoshop,
  SiAmazonaws,
  SiCss3,
  SiDeno,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastify,
  SiFigma,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGooglecloud,
  SiGoogleplay,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMicrosoftexcel,
  SiMicrosoftoffice,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOnlyoffice,
  SiPrisma,
  SiPwa,
  SiPython,
  SiReact,
  SiRust,
  SiStyledcomponents,
  SiTailwindcss,
  SiThunderbird,
  SiTypescript,
  SiWindows
} from 'react-icons/si'

export interface Knowledge {
  icon: IconType
  title: string
  color: string
  level: 1 | 2 | 3
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
        level: 3,
        icon: SiJavascript,
        color: '#F7DF1E'
      },
      {
        title: 'Typescript',
        level: 3,
        icon: SiTypescript,
        color: '#3178C6'
      },
      {
        title: 'Python',
        level: 2,
        icon: SiPython,
        color: '#3776AB'
      },
      {
        title: 'Rust',
        level: 1,
        icon: SiRust,
        color: '#F74C00'
      },
      {
        title: 'Bash Script',
        level: 2,
        icon: SiGnubash,
        color: '#4EAA25'
      }
    ]
  },
  {
    title: 'Desenvolvimento Web',
    knowledgeList: [
      {
        title: 'HTML5',
        level: 3,
        icon: SiHtml5,
        color: '#E34F26'
      },
      {
        title: 'CSS3',
        level: 3,
        icon: SiCss3,
        color: '#1572B6'
      },
      {
        title: 'React.js',
        level: 2,
        icon: SiReact,
        color: '#61DAFB'
      },
      {
        title: 'Next.js',
        level: 2,
        icon: SiNextdotjs,
        color: '#FFFFFF'
      },
      {
        title: 'Tailwind CSS',
        level: 3,
        icon: SiTailwindcss,
        color: '#06B6D4'
      },
      {
        title: 'Styled Component',
        level: 2,
        icon: SiStyledcomponents,
        color: '#DB7093'
      },
      {
        title: 'PWA',
        level: 1,
        icon: SiPwa,
        color: '#5A0FC8'
      }
    ]
  },
  {
    title: 'Desenvolvimento Back-end',
    knowledgeList: [
      {
        title: 'Node.js',
        level: 2,
        icon: SiNodedotjs,
        color: '#339933'
      },
      {
        title: 'Deno',
        level: 1,
        icon: SiDeno,
        color: '#FFFFFF'
      },
      {
        title: 'Prisma',
        level: 2,
        icon: SiPrisma,
        color: '#2D3748'
      },
      {
        title: 'Express',
        level: 2,
        icon: SiExpress,
        color: '#FFFFFF'
      },
      {
        title: 'Fastify',
        level: 1,
        icon: SiFastify,
        color: '#FFF'
      },
      {
        title: 'Nest.js',
        level: 1,
        icon: SiNestjs,
        color: '#E0234E'
      },
      {
        title: 'NGINX',
        level: 1,
        icon: SiNginx,
        color: '#009639'
      }
    ]
  },
  {
    title: 'Desenvolvimento Mobile',
    knowledgeList: [
      {
        title: 'React Native',
        level: 2,
        icon: SiReact,
        color: '#61DAFB'
      },
      {
        title: 'Expo',
        level: 2,
        icon: SiExpo,
        color: '#000020'
      },
      {
        title: 'Google Play',
        level: 1,
        icon: SiGoogleplay,
        color: '#414141'
      }
    ]
  },
  {
    title: 'Infraestrutura e DevOps',
    knowledgeList: [
      {
        title: 'Docker',
        level: 2,
        icon: SiDocker,
        color: '#2496ED'
      },
      {
        title: 'Linux',
        level: 2,
        icon: SiLinux,
        color: '#FCC624'
      },
      {
        title: 'Google Cloud',
        level: 1,
        icon: SiGooglecloud,
        color: '#4285F4'
      },
      {
        title: 'Amazon AWS',
        level: 1,
        icon: SiAmazonaws,
        color: '#232F3E'
      },
      {
        title: 'Github',
        level: 3,
        icon: SiGithub,
        color: '#181717'
      }
    ]
  },
  {
    title: 'Design',
    knowledgeList: [
      {
        title: 'Figma',
        level: 2,
        icon: SiFigma,
        color: '#F24E1E'
      },
      {
        title: 'Photoshop',
        level: 2,
        icon: SiAdobephotoshop,
        color: '#31A8FF'
      }
    ]
  },
  {
    title: 'Office',
    knowledgeList: [
      {
        title: 'Microsoft Office',
        level: 3,
        icon: SiMicrosoftoffice,
        color: '#217346'
      },
      {
        title: 'Onlyoffice',
        level: 3,
        icon: SiOnlyoffice,
        color: '#444444'
      },
      {
        title: 'Thunderbird',
        level: 1,
        icon: SiThunderbird,
        color: '#0A84FF'
      },
      {
        title: 'Windows',
        level: 2,
        icon: SiWindows,
        color: '#0078D6'
      }
    ]
  }
]
