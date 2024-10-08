import {
  BunIcon,
  DenoIcon,
  ExpoIcon,
  JavaIcon,
  JavascriptIcon,
  MarkdownIcon,
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
  ViteIcon,
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
  vite: () => <ViteIcon />,
  nodejs: () => <NodeIcon />,
  prisma: () => <PrismaIcon />,
  vue: () => <VueJsIcon />,
  svelte: () => <SvelteIcon />,
  mdx: () => <MarkdownIcon />,
  deno: () => <DenoIcon />,
  postgresql: () => <PostgreSQLIcon />,
  java: () => <JavaIcon />,
  python: () => <PythonIcon />,
  rust: () => <RustIcon />,
  bun: () => <BunIcon />
}
