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
  SiGithub,
  SiGnubash,
  SiGooglecloud,
  SiGoogleplay,
  SiHtml5,
  SiJavascript,
  SiLinux,
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
  SiWindows,
  SiVuedotjs,
  SiElixir,
  SiCplusplus,
  SiPhp,
  SiJquery,
  SiBootstrap,
  SiGraphql,
  SiNunjucks,
  SiElectron,
  SiArduino,
  SiWordpress,
  SiGoogle,
  SiVercel,
  SiCloudflare,
  SiPlanetscale,
  SiCoderwall,
  SiAdobeillustrator,
  SiHeroku
} from 'react-icons/si'
import { FaJava, FaPhoenixFramework } from 'react-icons/fa'

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
    title: 'Programming languages',
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
    title: 'Web development',
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
    title: 'Back-end development',
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
    title: 'Mobile development',
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
    title: 'Infrastructure and DevOps',
    knowledgeList: [
      {
        title: 'Heroku',
        level: 2,
        icon: SiHeroku,
        color: '#430098'
      },
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
        title: 'AWS',
        level: 1,
        icon: SiAmazonaws,
        color: '#232F3E'
      },
      {
        title: 'Github',
        level: 3,
        icon: SiGithub,
        color: '#181717'
      },
      {
        title: 'Vercel',
        level: 2,
        icon: SiVercel,
        color: '#000000'
      },
      {
        title: 'PlanetScale',
        level: 1,
        icon: SiPlanetscale,
        color: '#000000'
      },
      {
        title: 'Cloudflare',
        level: 1,
        icon: SiCloudflare,
        color: '#F38020'
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
        title: 'Google Workspace',
        level: 2,
        icon: SiGoogle,
        color: '#4285F4'
      },
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

export const studiedTechs: { icon: IconType; title: string }[] = [
  {
    title: 'Vue.js',
    icon: SiVuedotjs
  },
  {
    title: 'Electron',
    icon: SiElectron
  },
  {
    title: 'Elixir',
    icon: SiElixir
  },
  {
    title: 'GraphQL',
    icon: SiGraphql
  },
  {
    title: 'Nunjucks',
    icon: SiNunjucks
  },
  {
    title: 'Phoenix',
    icon: FaPhoenixFramework
  },
  {
    title: 'PHP',
    icon: SiPhp
  },
  {
    title: 'Wordpress',
    icon: SiWordpress
  },
  {
    title: 'jQuery',
    icon: SiJquery
  },
  {
    title: 'Bootstrap',
    icon: SiBootstrap
  },
  {
    title: 'Java',
    icon: FaJava
  },
  {
    title: 'C++',
    icon: SiCplusplus
  },
  {
    title: 'Arduino',
    icon: SiArduino
  },
  {
    title: 'Illustrator',
    icon: SiAdobeillustrator
  }
]
