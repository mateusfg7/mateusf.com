import Link from 'next/link'
import { FiBook, FiDownload } from 'react-icons/fi'

export function AboutSection() {
  return (
    <div
      id="sobre-mim"
      className="min-h-screen flex items-center justify-center bg-neutral-900 py-20 shadow-2xl shadow-black/30"
    >
      <div className="content-w flex flex-col md:flex-row justify-between">
        <div className="hidden md:block flex-1">
          <img
            src="https://github.com/mateusfg7.png"
            className="w-96 h-[30rem] object-cover rounded-3xl border border-neutral-500"
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:block">
          <h1 className="text-4xl md:mb-8 text-blue-500">Sobre mim</h1>
          <img
            src="https://github.com/mateusfg7.png"
            className="md:hidden w-1/2 my-14 object-cover rounded-3xl"
          />
          <p className="text-xl mb-3 px-4 md:p-0">
            Me chamo <span className="font-bold">Mateus Felipe Gonçalves</span>,
            tenho 20 anos e moro em Pará de Minas - MG, Brasil.
          </p>
          <p className="text-xl mb-3 px-4 md:p-0">
            <span className="font-semibold">Auto didata</span> full-stack.
            Possuo conhecimento em{' '}
            <a
              className="text-neutral-50 hover:underline hover:cursor-pointer"
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              ReactJS
            </a>{' '}
            e{' '}
            <a
              className="text-neutral-50 hover:underline hover:cursor-pointer"
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              NextJS
            </a>{' '}
            no Front-end,{' '}
            <a
              className="text-neutral-50 hover:underline hover:cursor-pointer"
              href="https://deno.land/"
              target="_blank"
              rel="noreferrer"
            >
              Deno
            </a>{' '}
            e{' '}
            <a
              className="text-neutral-50 hover:underline hover:cursor-pointer"
              href="https://nodejs.org/"
              target="_blank"
              rel="noreferrer"
            >
              NodeJS
            </a>{' '}
            no Back-end, e{' '}
            <a
              className="text-neutral-50 hover:underline hover:cursor-pointer"
              href="https://reactnative.dev/"
              target="_blank"
              rel="noreferrer"
            >
              React-native
            </a>
            /
            <a
              className="text-neutral-50 hover:underline hover:cursor-pointer"
              href="https://expo.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Expo
            </a>{' '}
            no Mobile com foco em Android. Possuo nível intermediário de inglês
            em leitura e escrita, habilidade adquirida através da leitura de
            várias documentações e artigos relacionados a tecnologias e outros
            assuntos em inglês, e também escrevendo blog posts e documentações
            de projetos pessoais.
          </p>
          <p className="text-xl px-4 md:p-0">
            Também tenho interesse na área de construção civil, elétrica e
            automação residencial.
          </p>
          <div className="mt-12 md:mt-6 flex items-center gap-10">
            <a
              className="text-blue-500 hover:text-blue-300 flex justify-center items-center gap-2"
              target="_blank"
              href="/assets/portifolio/cv-mateus-felipe.pdf"
            >
              Baixar CV <FiDownload />
            </a>
            <Link
              className="text-blue-500 hover:text-blue-300 flex justify-center items-center gap-2"
              href="/"
            >
              Blog <FiBook />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
