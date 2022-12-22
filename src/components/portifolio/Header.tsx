import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

interface Props {
  scrollPosition: number
}

export function Header({ scrollPosition }: Props) {
  function scrollTo(position: number) {
    if (window) window.scrollTo({ top: position, behavior: 'smooth' })
  }

  return (
    <div className="flex justify-center items-center fixed bg-neutral-1000/80 backdrop-blur-lg w-full">
      <nav className="content-w flex items-center justify-center py-6 relative">
        <div className=" absolute left-0">
          <a
            className="text-blue-500 font-medium font-chivo-mono hover:cursor-pointer"
            onClick={() => scrollTo(0)}
          >
            Mateus Felipe
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            className={`${
              scrollPosition >= 590 && scrollPosition < 1380
                ? 'text-neutral-50'
                : 'text-neutral-400'
            } hover:text-neutral-50 hover:cursor-pointer`}
            onClick={() => scrollTo(768)}
          >
            Sobre mim
          </a>
          <a
            className={`${
              scrollPosition >= 1380 && scrollPosition < 4140
                ? 'text-neutral-50'
                : 'text-neutral-400'
            } hover:text-neutral-50 hover:cursor-pointer`}
            onClick={() => scrollTo(1536)}
          >
            Projetos
          </a>
          <a
            className={`${
              scrollPosition >= 4140 && scrollPosition < 5382
                ? 'text-neutral-50'
                : 'text-neutral-400'
            } hover:text-neutral-50 hover:cursor-pointer`}
            onClick={() => scrollTo(4544)}
          >
            Conhecimentos
          </a>
          <a
            className={`${
              scrollPosition >= 5382 ? 'text-neutral-50' : 'text-neutral-400'
            } hover:text-neutral-50 hover:cursor-pointer`}
            onClick={() => scrollTo(5661)}
          >
            Contato
          </a>
        </div>
        <div className="flex items-center gap-4 absolute right-0">
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
