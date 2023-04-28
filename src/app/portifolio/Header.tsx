import { useEffect, useState } from 'react'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

interface Props {
  scrollPosition: number
  maxScrollValue: number
}

export function Header({ scrollPosition, maxScrollValue }: Props) {
  const [percentScrollPosition, setPercentScrollPosition] = useState(0)

  useEffect(() => {
    setPercentScrollPosition(
      Math.round((scrollPosition / maxScrollValue) * 100)
    )
  }, [scrollPosition, maxScrollValue])

  return (
    <div
      className={`flex justify-center items-center fixed bg-neutral-1000/80 backdrop-blur-lg w-full z-50 duration-300 border-b ${
        percentScrollPosition > 0
          ? 'border-b-neutral-800'
          : 'border-b-transparent'
      }`}
    >
      <nav className="portifolio-content-w flex items-center justify-between md:justify-center gap-4 py-10 md:py-6 relative">
        <div className="md:absolute left-0">
          <a
            href="#home"
            className="text-blue-500 font-medium font-chivo-mono hover:cursor-pointer"
          >
            Mateus Felipe
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#sobre-mim"
            className={`${
              percentScrollPosition >= 9 && percentScrollPosition < 21
                ? 'text-neutral-50'
                : 'text-neutral-400'
            } hover:text-neutral-50 hover:cursor-pointer`}
          >
            Sobre mim
          </a>
          <a
            href="#projetos"
            className={`${
              percentScrollPosition >= 21 && percentScrollPosition < 66
                ? 'text-neutral-50'
                : 'text-neutral-400'
            } hover:text-neutral-50 hover:cursor-pointer`}
          >
            Projetos
          </a>
          <a
            href="#conhecimentos"
            className={`${
              percentScrollPosition >= 66 && percentScrollPosition < 95
                ? 'text-neutral-50'
                : 'text-neutral-400'
            } hover:text-neutral-50 hover:cursor-pointer`}
          >
            Conhecimentos
          </a>
          <a
            href="#contato"
            className={`${
              percentScrollPosition >= 95
                ? 'text-neutral-50'
                : 'text-neutral-400'
            } hover:text-neutral-50 hover:cursor-pointer`}
          >
            Contato
          </a>
        </div>
        <div className="flex items-center gap-6 md:gap-4 md:absolute right-0">
          <a
            className="text-xl text-neutral-300 hover:text-neutral-50 hover:cursor-pointer"
            href="https://linkedin.com/in/mateusfg"
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
          >
            <FiLinkedin />
          </a>
          <a
            className="text-xl text-neutral-300 hover:text-neutral-50 hover:cursor-pointer"
            href="https://github.com/mateusfg7"
            target="_blank"
            rel="noreferrer"
            title="Github"
          >
            <FiGithub />
          </a>
          <a
            className="text-xl text-neutral-300 hover:text-neutral-50 hover:cursor-pointer"
            href="https://instagram.com/mateusfg7"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <FiInstagram />
          </a>
        </div>
      </nav>
    </div>
  )
}
