import { IconType } from 'react-icons'
import {
  SiAdobephotoshop,
  SiAmazonaws,
  SiDeno,
  SiExpress,
  SiFastify,
  SiGithub,
  SiGoogleplay,
  SiJavascript,
  SiMicrosoftoffice,
  SiNginx,
  SiOnlyoffice,
  SiStyledcomponents,
  SiThunderbird,
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
  SiPlanetscale,
  SiBun,
  SiPwa,
  SiPostgresql
} from 'react-icons/si'
import { FaJava, FaPhoenixFramework } from 'react-icons/fa'
import { TbSql } from 'react-icons/tb'

import {
  BashIcon,
  CSS3Icon,
  CloudflareIcon,
  DockerIcon,
  ExpoIcon,
  GoogleCloudIcon,
  HTML5Icon,
  HerokuIcon,
  LinuxIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  PrismaIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  SvelteIcon,
  TailwindcssIcon,
  TypescriptIcon,
  VercelIcon,
  FigmaIcon
} from '~/components/icons'

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
        icon: TypescriptIcon,
        color: '#3178C6'
      },
      {
        title: 'Python',
        status: 'god',
        icon: PythonIcon,
        color: '#3776AB'
      },
      {
        title: 'Rust',
        status: 'learning',
        icon: RustIcon,
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
        icon: BashIcon,
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
      },
      {
        title: 'SQL',
        icon: TbSql,
        color: '#003B57',
        status: 'learning'
      }
    ]
  },
  {
    title: 'Web development',
    knowledgeList: [
      {
        title: 'HTML5',
        status: 'god',
        icon: HTML5Icon,
        color: '#E34F26'
      },
      {
        title: 'CSS3',
        status: 'god',
        icon: CSS3Icon,
        color: '#1572B6'
      },
      {
        title: 'React.js',
        status: 'god',
        icon: ReactIcon,
        color: '#61DAFB'
      },
      {
        title: 'Next.js',
        status: 'god',
        icon: NextIcon,
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
        icon: SvelteIcon,
        color: '#FF3E00'
      },
      {
        title: 'Tailwind CSS',
        status: 'god',
        icon: TailwindcssIcon,
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
        icon: NodeIcon,
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
        icon: PrismaIcon,
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
        icon: NestIcon,
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
        icon: ReactIcon,
        color: '#61DAFB'
      },
      {
        title: 'Expo',
        status: 'god',
        icon: ExpoIcon,
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
        icon: HerokuIcon,
        color: '#430098'
      },
      {
        title: 'Docker',
        status: 'god',
        icon: DockerIcon,
        color: '#2496ED'
      },
      {
        title: 'Linux',
        status: 'god',
        icon: LinuxIcon,
        color: '#FCC624'
      },
      {
        title: 'Google Cloud',
        status: 'god',
        icon: GoogleCloudIcon,
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
        icon: VercelIcon,
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
        icon: CloudflareIcon,
        color: '#F38020'
      },
      {
        title: 'PostgreSQL',
        status: 'learning',
        icon: SiPostgresql,
        color: '#336791'
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
        icon: FigmaIcon,
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
