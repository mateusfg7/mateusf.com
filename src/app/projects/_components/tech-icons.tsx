import { SiVite, SiMdx } from 'react-icons/si'
import {
  BunIcon,
  DenoIcon,
  ExpoIcon,
  JavaIcon,
  JavascriptIcon,
  NextIcon,
  NodeIcon,
  PostgreSQLIcon,
  PrismaIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  SvelteIcon,
  TailwindcssIcon,
  TypescriptIcon,
  VueJsIcon
} from '~/components/icons'

export const techIcons = {
  javascript: () => <JavascriptIcon />,
  typescript: () => <TypescriptIcon />,
  'react-native': () => <ReactIcon />,
  expo: () => <ExpoIcon />,
  reactjs: () => <ReactIcon />,
  nextjs: () => <NextIcon />,
  tailwindcss: () => <TailwindcssIcon />,
  vite: () => <SiVite className="text-[#FFC119]" title="Vite" />,
  nodejs: () => <NodeIcon />,
  prisma: () => <PrismaIcon />,
  vue: () => <VueJsIcon />,
  svelte: () => <SvelteIcon />,
  mdx: () => (
    <SiMdx className="text-[#1B1F24] dark:text-[rgb(77,81,86)]" title="MDX" />
  ),
  deno: () => <DenoIcon />,
  postgresql: () => <PostgreSQLIcon />,
  java: () => <JavaIcon />,
  python: () => <PythonIcon />,
  rust: () => <RustIcon />,
  bun: () => <BunIcon />
}
