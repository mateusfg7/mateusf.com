import Link from 'next/link'
import Image from 'next/image'
import { DownloadSimple, Book } from '@/shared/lib/phosphor-icons'



export function AboutSection() {
  return (
    <div
      id="sobre-mim"
      className="flex min-h-screen items-center justify-center bg-neutral-900 py-20 shadow-2xl shadow-black/30"
    >
      <div className="portifolio-content-w flex flex-col justify-between md:flex-row">
        <div className="hidden flex-1 md:block">
          <Image
            src="https://github.com/mateusfg7.png"
            height={460}
            width={460}
            alt="Mateus Felipe's picture"
            className="h-[30rem] w-96 rounded-3xl border border-neutral-500 object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col items-center md:block">
          <h1 className="text-4xl text-blue-500 md:mb-8">Sobre mim</h1>
          <Image
            src="https://github.com/mateusfg7.png"
            height={460}
            width={460}
            alt="Mateus Felipe's picture"
            className="my-14 w-1/2 rounded-3xl object-cover md:hidden"
          />
          <div className='px-4 md:p-0 text-xl flex flex-col gap-3 text-justify md:text-left'>
            <p>
              Me chamo <span className="font-bold">Mateus Felipe Gonçalves</span>,
              tenho 20 anos e moro em Pará de Minas - MG, Brasil.
            </p>
            <p>
              <span className="font-semibold">Auto didata</span> full-stack.
              Possuo conhecimento em{' '}
              <a
                className="text-neutral-50 hover:cursor-pointer hover:underline"
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                ReactJS
              </a>{' '}
              e{' '}
              <a
                className="text-neutral-50 hover:cursor-pointer hover:underline"
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                NextJS
              </a>{' '}
              no Front-end,{' '}
              <a
                className="text-neutral-50 hover:cursor-pointer hover:underline"
                href="https://deno.land/"
                target="_blank"
                rel="noreferrer"
              >
                Deno
              </a>{' '}
              e{' '}
              <a
                className="text-neutral-50 hover:cursor-pointer hover:underline"
                href="https://nodejs.org/"
                target="_blank"
                rel="noreferrer"
              >
                NodeJS
              </a>{' '}
              no Back-end, e{' '}
              <a
                className="text-neutral-50 hover:cursor-pointer hover:underline"
                href="https://reactnative.dev/"
                target="_blank"
                rel="noreferrer"
              >
                React-native
              </a>
              /
              <a
                className="text-neutral-50 hover:cursor-pointer hover:underline"
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
            <p>
              Também tenho interesse na área de construção civil, elétrica e
              automação residencial.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-10 md:mt-6">
            <a
              className="flex items-center justify-center gap-2 text-blue-500 hover:text-blue-300"
              target="_blank"
              href="/assets/portifolio/cv-mateus-felipe.pdf"
            >
              Baixar CV <DownloadSimple />
            </a>
            <Link
              className="flex items-center justify-center gap-2 text-blue-500 hover:text-blue-300"
              href="/"
            >
              Blog <Book />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
