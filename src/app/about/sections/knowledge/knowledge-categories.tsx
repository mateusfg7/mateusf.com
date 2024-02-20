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
  SiGraphql,
  SiNunjucks,
  SiElectron,
  SiArduino,
  SiWordpress,
  SiGoogle,
  SiVercel,
  SiCloudflare,
  SiPlanetscale,
  SiHeroku,
  SiSvelte,
  SiBun
} from 'react-icons/si'
import { FaJava, FaPhoenixFramework } from 'react-icons/fa'

export interface Knowledge {
  icon: IconType
  title: string
  color: string
  status: 'god' | 'bad' | 'learning'
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
        status: 'god',
        icon: SiJavascript,
        color: '#F7DF1E'
      },
      {
        title: 'Typescript',
        status: 'god',
        icon: SiTypescript,
        color: '#3178C6'
      },
      {
        title: 'Python',
        status: 'god',
        icon: SiPython,
        color: '#3776AB'
      },
      {
        title: 'Rust',
        status: 'learning',
        icon: SiRust,
        color: '#F74C00'
      },
      {
        title: 'Elixir',
        icon: SiElixir,
        color: '#4B275F',
        status: 'bad'
      },
      {
        title: 'Bash Script',
        status: 'god',
        icon: SiGnubash,
        color: '#4EAA25'
      },
      {
        title: 'PHP',
        icon: SiPhp,
        color: '#777BB4',
        status: 'bad'
      },
      {
        title: 'Java',
        icon: FaJava,
        color: '#f89820',
        status: 'bad'
      },
      {
        title: 'C++',
        icon: SiCplusplus,
        color: '#00599C',
        status: 'bad'
      }
    ]
  },
  {
    title: 'Web development',
    knowledgeList: [
      {
        title: 'HTML5',
        status: 'god',
        icon: SiHtml5,
        color: '#E34F26'
      },
      {
        title: 'CSS3',
        status: 'god',
        icon: SiCss3,
        color: '#1572B6'
      },
      {
        title: 'React.js',
        status: 'god',
        icon: SiReact,
        color: '#61DAFB'
      },
      {
        title: 'Next.js',
        status: 'god',
        icon: SiNextdotjs,
        color: '#FFFFFF'
      },
      {
        title: 'Vue.js',
        status: 'bad',
        icon: SiVuedotjs,
        color: '#4FC08D'
      },
      {
        title: 'Svelte',
        status: 'learning',
        icon: SiSvelte,
        color: '#FF3E00'
      },
      {
        title: 'Tailwind CSS',
        status: 'god',
        icon: SiTailwindcss,
        color: '#06B6D4'
      },
      {
        title: 'Styled Component',
        status: 'god',
        icon: SiStyledcomponents,
        color: '#DB7093'
      },
      {
        title: 'PWA',
        status: 'god',
        icon: SiPwa,
        color: '#5A0FC8'
      },
      {
        title: 'Nunjucks',
        icon: SiNunjucks,
        color: '#1C4913',
        status: 'bad'
      },
      {
        title: 'Wordpress',
        icon: SiWordpress,
        color: '#21759B',
        status: 'god'
      },
      {
        title: 'jQuery',
        icon: SiJquery,
        color: '#0769AD',
        status: 'bad'
      }
    ]
  },
  {
    title: 'Back-end development',
    knowledgeList: [
      {
        title: 'Node.js',
        status: 'god',
        icon: SiNodedotjs,
        color: '#339933'
      },
      {
        title: 'Deno',
        status: 'god',
        icon: SiDeno,
        color: '#FFFFFF'
      },
      {
        title: 'Bun',
        status: 'god',
        icon: SiBun,
        color: '#FBF0DF'
      },
      {
        title: 'Prisma',
        status: 'god',
        icon: SiPrisma,
        color: '#2D3748'
      },
      {
        title: 'Express',
        status: 'god',
        icon: SiExpress,
        color: '#FFFFFF'
      },
      {
        title: 'Fastify',
        status: 'bad',
        icon: SiFastify,
        color: '#FFF'
      },
      {
        title: 'Nest.js',
        status: 'god',
        icon: SiNestjs,
        color: '#E0234E'
      },
      {
        title: 'NGINX',
        status: 'bad',
        icon: SiNginx,
        color: '#009639'
      },
      {
        title: 'GraphQL',
        icon: SiGraphql,
        color: '#E10098',
        status: 'bad'
      },
      {
        title: 'Phoenix',
        icon: FaPhoenixFramework,
        color: '#FD4F00',
        status: 'bad'
      }
    ]
  },
  {
    title: 'Mobile development',
    knowledgeList: [
      {
        title: 'React Native',
        status: 'god',
        icon: SiReact,
        color: '#61DAFB'
      },
      {
        title: 'Expo',
        status: 'god',
        icon: SiExpo,
        color: '#000020'
      },
      {
        title: 'Google Play',
        status: 'god',
        icon: SiGoogleplay,
        color: '#414141'
      }
    ]
  },
  {
    title: 'Desktop development',
    knowledgeList: [
      {
        title: 'Electron',
        icon: SiElectron,
        color: '#47848F',
        status: 'bad'
      }
    ]
  },
  {
    title: 'Infrastructure and DevOps',
    knowledgeList: [
      {
        title: 'Heroku',
        status: 'god',
        icon: SiHeroku,
        color: '#430098'
      },
      {
        title: 'Docker',
        status: 'god',
        icon: SiDocker,
        color: '#2496ED'
      },
      {
        title: 'Linux',
        status: 'god',
        icon: SiLinux,
        color: '#FCC624'
      },
      {
        title: 'Google Cloud',
        status: 'god',
        icon: SiGooglecloud,
        color: '#4285F4'
      },
      {
        title: 'AWS',
        status: 'bad',
        icon: SiAmazonaws,
        color: '#232F3E'
      },
      {
        title: 'Github',
        status: 'god',
        icon: SiGithub,
        color: '#181717'
      },
      {
        title: 'Vercel',
        status: 'god',
        icon: SiVercel,
        color: '#000000'
      },
      {
        title: 'PlanetScale',
        status: 'god',
        icon: SiPlanetscale,
        color: '#000000'
      },
      {
        title: 'Cloudflare',
        status: 'god',
        icon: SiCloudflare,
        color: '#F38020'
      }
    ]
  },
  {
    title: 'Electrical',
    knowledgeList: [
      {
        title: 'Arduino',
        icon: SiArduino,
        color: '#00878F',
        status: 'bad'
      }
    ]
  },
  {
    title: 'Design',
    knowledgeList: [
      {
        title: 'Figma',
        status: 'god',
        icon: SiFigma,
        color: '#F24E1E'
      },
      {
        title: 'Photoshop',
        status: 'god',
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
        status: 'god',
        icon: SiGoogle,
        color: '#4285F4'
      },
      {
        title: 'Microsoft Office',
        status: 'god',
        icon: SiMicrosoftoffice,
        color: '#217346'
      },
      {
        title: 'Onlyoffice',
        status: 'god',
        icon: SiOnlyoffice,
        color: '#444444'
      },
      {
        title: 'Thunderbird',
        status: 'bad',
        icon: SiThunderbird,
        color: '#0A84FF'
      },
      {
        title: 'Windows',
        status: 'god',
        icon: SiWindows,
        color: '#0078D6'
      }
    ]
  }
]
