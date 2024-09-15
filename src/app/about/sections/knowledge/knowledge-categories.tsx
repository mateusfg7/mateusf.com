import { SVGProps } from 'react'
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
  FigmaIcon,
  JavascriptIcon,
  ElixirIcon,
  PHPIcon,
  JavaIcon,
  CPlusPlusIcon,
  SQLIcon,
  VueJsIcon,
  WordPressIcon,
  JQueryIcon,
  DenoIcon,
  BunIcon,
  ExpressIcon,
  NginxIcon,
  GraphQLIcon,
  ElectronIcon,
  TauriIcon,
  AWSIcon,
  GithubIcon,
  PostgreSQLIcon,
  PhotoShopIcon,
  GoogleWorkspace,
  WindowsIcon,
  PlanetScaleIcon,
  StyledComponentIcon,
  PWAIcon,
  GooglePlayStore,
  MicrosoftOfficeIcon,
  OnlyOfficeIcon,
  ThunderbirdIcon,
  FastApiIcon,
  GitIcon,
  GithubActionsIcon,
  VSCodeIcon,
  CodespacesIcon,
  GitpodIcon,
  VimIcon,
  GlpiIcon,
  AngularIcon
} from '~/components/icons'

type IconType = (props: SVGProps<SVGSVGElement>) => JSX.Element

export interface Knowledge {
  icon: IconType
  title: string
  color: string
  status: 'god' | 'bad' | 'learning' | 'stack'
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
        icon: JavascriptIcon,
        color: '#F7DF1E'
      },
      {
        title: 'Typescript',
        status: 'stack',
        icon: TypescriptIcon,
        color: '#3178C6'
      },
      {
        title: 'Python',
        status: 'stack',
        icon: PythonIcon,
        color: '#3776AB'
      },
      {
        title: 'Rust',
        status: 'god',
        icon: RustIcon,
        color: '#F74C00'
      },
      {
        title: 'Elixir',
        icon: ElixirIcon,
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
        icon: PHPIcon,
        color: '#777BB4',
        status: 'bad'
      },
      {
        title: 'Java',
        icon: JavaIcon,
        color: '#f89820',
        status: 'learning'
      },
      {
        title: 'C++',
        icon: CPlusPlusIcon,
        color: '#00599C',
        status: 'bad'
      },
      {
        title: 'SQL',
        icon: SQLIcon,
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
        status: 'stack',
        icon: HTML5Icon,
        color: '#E34F26'
      },
      {
        title: 'CSS3',
        status: 'stack',
        icon: CSS3Icon,
        color: '#1572B6'
      },
      {
        title: 'React.js',
        status: 'stack',
        icon: ReactIcon,
        color: '#61DAFB'
      },
      {
        title: 'Next.js',
        status: 'stack',
        icon: NextIcon,
        color: '#FFFFFF'
      },
      {
        title: 'Vue.js',
        status: 'bad',
        icon: VueJsIcon,
        color: '#4FC08D'
      },
      {
        title: 'Svelte',
        status: 'god',
        icon: SvelteIcon,
        color: '#FF3E00'
      },
      {
        title: 'Angular',
        status: 'learning',
        icon: AngularIcon,
        color: '#c3002f'
      },
      {
        title: 'Tailwind CSS',
        status: 'stack',
        icon: TailwindcssIcon,
        color: '#06B6D4'
      },
      {
        title: 'Styled Component',
        status: 'god',
        icon: StyledComponentIcon,
        color: '#DB7093'
      },
      {
        title: 'PWA',
        status: 'god',
        icon: PWAIcon,
        color: '#5A0FC8'
      },
      {
        title: 'Wordpress',
        icon: WordPressIcon,
        color: '#21759B',
        status: 'god'
      },
      {
        title: 'jQuery',
        icon: JQueryIcon,
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
        status: 'stack',
        icon: NodeIcon,
        color: '#339933'
      },
      {
        title: 'Deno',
        status: 'god',
        icon: DenoIcon,
        color: '#FFFFFF'
      },
      {
        title: 'Bun',
        status: 'god',
        icon: BunIcon,
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
        icon: ExpressIcon,
        color: '#FFFFFF'
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
        icon: NginxIcon,
        color: '#009639'
      },
      {
        title: 'GraphQL',
        icon: GraphQLIcon,
        color: '#E10098',
        status: 'bad'
      },
      {
        title: 'FastAPI',
        icon: FastApiIcon,
        color: '#049688',
        status: 'learning'
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
        icon: GooglePlayStore,
        color: '#414141'
      }
    ]
  },
  {
    title: 'Desktop development',
    knowledgeList: [
      {
        title: 'Electron',
        icon: ElectronIcon,
        color: '#47848F',
        status: 'bad'
      },
      {
        title: 'Tauri',
        icon: TauriIcon,
        color: '#ffc131',
        status: 'learning'
      }
    ]
  },
  {
    title: 'Infrastructure and cloud',
    knowledgeList: [
      {
        title: 'Heroku',
        status: 'god',
        icon: HerokuIcon,
        color: '#430098'
      },
      {
        title: 'Docker',
        status: 'stack',
        icon: DockerIcon,
        color: '#2496ED'
      },
      {
        title: 'Linux',
        status: 'stack',
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
        icon: AWSIcon,
        color: '#232F3E'
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
        icon: PlanetScaleIcon,
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
        icon: PostgreSQLIcon,
        color: '#336791'
      }
    ]
  },
  {
    title: 'Misc Tools',
    knowledgeList: [
      {
        title: 'GIT',
        status: 'stack',
        icon: GitIcon,
        color: '#F34F29'
      },
      {
        title: 'Github',
        status: 'stack',
        icon: GithubIcon,
        color: '#181717'
      },
      {
        title: 'Github Actions',
        status: 'god',
        icon: GithubActionsIcon,
        color: '#2088ff'
      },
      {
        title: 'VSCode',
        status: 'stack',
        icon: VSCodeIcon,
        color: '#0065A9'
      },
      {
        title: 'Codespaces',
        status: 'god',
        icon: CodespacesIcon,
        color: '#181717'
      },
      {
        title: 'GitPod',
        status: 'god',
        icon: GitpodIcon,
        color: '#ff8a00'
      },
      {
        title: 'Vim',
        status: 'god',
        icon: VimIcon,
        color: '#019833'
      },
      {
        title: 'GLPI',
        status: 'bad',
        icon: GlpiIcon,
        color: '#01A4F7'
      },
      {
        title: 'Google Workspace',
        status: 'god',
        icon: GoogleWorkspace,
        color: '#4285F4'
      },
      {
        title: 'Microsoft Office',
        status: 'god',
        icon: MicrosoftOfficeIcon,
        color: '#c72127'
      },
      {
        title: 'Onlyoffice',
        status: 'god',
        icon: OnlyOfficeIcon,
        color: '#FF6F3D'
      },
      {
        title: 'Thunderbird',
        status: 'bad',
        icon: ThunderbirdIcon,
        color: '#0A84FF'
      },
      {
        title: 'Windows',
        status: 'god',
        icon: WindowsIcon,
        color: '#0078D6'
      },
      {
        title: 'Figma',
        status: 'god',
        icon: FigmaIcon,
        color: '#F24E1E'
      },
      {
        title: 'Photoshop',
        status: 'god',
        icon: PhotoShopIcon,
        color: '#31A8FF'
      }
    ]
  }
]
