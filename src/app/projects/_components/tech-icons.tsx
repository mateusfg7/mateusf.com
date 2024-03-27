import { FaJava } from 'react-icons/fa'
import {
  SiTypescript,
  SiReact,
  SiExpo,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiPrisma,
  SiVuedotjs,
  SiMdx,
  SiJavascript,
  SiDeno,
  SiPostgresql,
  SiPython,
  SiSvelte,
  SiRust,
  SiBun
} from 'react-icons/si'

export const techIcons = {
  javascript: () => (
    <SiJavascript className="bg-black text-[#F7DF1E]" title="Javascript" />
  ),
  typescript: () => (
    <SiTypescript className="bg-white text-[#358EF1]" title="Typescript" />
  ),
  'react-native': () => (
    <SiReact className="text-[#61DBFB]" title="React Native" />
  ),
  expo: () => <SiExpo title="Expo" />,
  reactjs: () => <SiReact className="text-[#61DBFB]" title="React.js" />,
  nextjs: () => <SiNextdotjs title="Next.js" />,
  tailwindcss: () => (
    <SiTailwindcss className="text-[#38BDF8]" title="Tailwind CSS" />
  ),
  vite: () => <SiVite className="text-[#FFC119]" title="Vite" />,
  nodejs: () => <SiNodedotjs className="text-[#66CC33]" title="Node.js" />,
  prisma: () => <SiPrisma className="text-[#4C51BF]" title="Prisma" />,
  vue: () => <SiVuedotjs className="text-[#4FC08D]" title="Vue.js" />,
  svelte: () => <SiSvelte className="text-[#FF3E00]" title="Svelte" />,
  mdx: () => (
    <SiMdx className="text-[#1B1F24] dark:text-[rgb(77,81,86)]" title="MDX" />
  ),
  deno: () => <SiDeno title="Deno" />,
  postgresql: () => (
    <SiPostgresql
      className="stroke-[#4169E1] stroke-[0.5px] text-[#4169E1]"
      title="PostgreSQL"
    />
  ),
  java: () => <FaJava className="text-[#f89820]" title="Java" />,
  python: () => <SiPython className="text-[#3776AB]" title="Python" />,
  rust: () => <SiRust className="text-[#F74C00]" title="Rust" />,
  bun: () => (
    <SiBun
      className="stroke-black/40 stroke-[0.5px] text-[#FBF0DF] shadow-black drop-shadow-md"
      title="Bun"
    />
  )
}
