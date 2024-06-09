import NextLink, { LinkProps } from 'next/link'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

import {
  JavascriptIcon,
  PythonIcon,
  RustIcon,
  TypescriptIcon
} from '~/components/icons'

const HandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mr-1 inline fill-current"
    width="21"
    height="21"
    viewBox="0 0 256 256"
  >
    <g>
      <path
        d="m213.27 104l-18-31.18a20 20 0 0 0-34.64 20l-28-48.5A20 20 0 0 0 98 64.31l-8-13.85a20 20 0 0 0-34.64 20l12 20.83l-1.17 1a20 20 0 0 0-29.49 25.88l38 65.83a80 80 0 0 0 138.57-80Zm-57.59 60.64l.17-.1l.14.24Z"
        opacity=".2"
      />
      <path d="m220.2 100l-18-31.18a28 28 0 0 0-47.3-1.92l-15.34-26.59a28 28 0 0 0-48.12-.63a28 28 0 0 0-43 34.78l3.34 5.79a28 28 0 0 0-22 41.92l38 65.82a87.46 87.46 0 0 0 53.43 41a88.56 88.56 0 0 0 22.92 3A88 88 0 0 0 220.2 100Zm-6.67 62.63A72 72 0 0 1 81.63 180l-38-65.82a12 12 0 0 1 20.79-12l22 38.1a8 8 0 1 0 13.85-8l-38-65.81a12 12 0 0 1 13.5-17.59a11.9 11.9 0 0 1 7.29 5.59l34 58.89a8 8 0 0 0 13.85-8l-26-45a12 12 0 0 1 20.78-12L160 107.78a48.08 48.08 0 0 0-11 61a8 8 0 0 0 13.86-8a32 32 0 0 1 11.71-43.71a8 8 0 0 0 2.93-10.93l-10-17.32a12 12 0 0 1 20.78-12l18 31.18a71.49 71.49 0 0 1 7.25 54.62Zm-29.26-132.7a8 8 0 0 1 9.8-5.66c15.91 4.27 29 14.11 36.86 27.73a8 8 0 0 1-13.86 8c-5.72-9.92-15.36-17.12-27.14-20.27a8 8 0 0 1-5.66-9.8ZM80.91 237a8 8 0 0 1-11.24 1.33c-11-8.69-20.11-19.58-28.6-34.28a8 8 0 0 1 13.86-8c7.44 12.88 15.27 22.32 24.65 29.72A8 8 0 0 1 80.91 237Z" />
    </g>
  </svg>
)

const Javascript = () => (
  <a
    href="https://www.javascript.com/"
    target="_blank"
    className="inline-flex items-center gap-px rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-[rgba(240,219,79,.5)] hover:bg-[rgba(240,219,79,.1)] dark:border-neutral-800 dark:bg-neutral-800/30  dark:hover:border-[rgba(240,219,79,.5)] dark:hover:bg-[rgba(240,219,79,.1)] "
  >
    <JavascriptIcon />
    <span className="text-base">Javascript</span>
  </a>
)
const Typescript = () => (
  <a
    href="https://www.typescriptlang.org/"
    target="_blank"
    className="inline-flex items-center gap-px rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-[rgba(0,122,204,.5)] hover:bg-[rgba(0,122,204,.1)] dark:border-neutral-800 dark:bg-neutral-800/30 dark:hover:border-[rgba(0,122,204,.5)] dark:hover:bg-[rgba(0,122,204,.1)]"
  >
    <TypescriptIcon />
    <span className="text-base">Typescript</span>
  </a>
)
const Python = () => (
  <a
    href="https://www.python.org/"
    target="_blank"
    className="inline-flex items-center gap-px rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-[rgba(255,232,115,.5)] hover:bg-[rgba(255,232,115,.1)] dark:border-neutral-800 dark:bg-neutral-800/30 dark:hover:border-[rgba(255,232,115,.5)] dark:hover:bg-[rgba(255,232,115,.1)]"
  >
    <PythonIcon />
    <span className="text-base">Python</span>
  </a>
)
const Rust = () => (
  <a
    href="https://www.rust-lang.org/"
    target="_blank"
    className="inline-flex items-center gap-px rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-black/50 hover:bg-black/10 dark:border-neutral-800 dark:bg-neutral-800/30 hover:dark:border-white/50 hover:dark:bg-white/10"
  >
    <RustIcon />
    <span className="text-base">Rust</span>
  </a>
)

const Link = ({ label, ...props }: { label: string } & LinkProps) => (
  <NextLink
    {...props}
    className="inline-flex items-center rounded-md px-1 font-medium text-black transition hover:bg-neutral-200/50 dark:text-white dark:hover:bg-neutral-800/50"
  >
    <span>{label}</span>

    <ArrowUpRight size="1em" className="text-xs" />
  </NextLink>
)

export function Introduction() {
  return (
    <div className="flex-1 space-y-4">
      <h2 className="text-xs opacity-70">Full-Stack Developer</h2>

      <p>
        <HandIcon />
        <span>Hello, welcome to my little corner on the web!</span>
      </p>

      <p>
        I&apos;m a self-taught code solutions programmer, I love programming and
        I try to use the most <strong>software architecture</strong>,{' '}
        <strong>clean</strong> and <strong>maintainable code</strong>. I like to
        work with technologies from the <Javascript />, <Typescript />,{' '}
        <Python /> and <Rust /> ecosystem.
      </p>

      <p>
        I&apos;m always learning and here you can find out about the projects
        I&apos;ve completed and am working on, as well as details about my
        career and skills. I&apos;m always looking to improve, and you can
        follow my progress and what I&apos;m currently studying.
      </p>

      <p>
        See more <Link label="about me" href="/about" /> or take a look into{' '}
        <Link label="my projects" href="/projects" /> {';)'}
      </p>

      <p>
        Maybe you can learn something on my{' '}
        <Link label="blog posts" href="/blog" /> or with my{' '}
        <Link label='"Today I Learn"' href="/blog/til" /> notes!
      </p>

      <p>
        I hope I can help you. I&apos;d love to hear your ideas and contribute
        whenever possible.
      </p>
    </div>
  )
}
