import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

export function Header() {
  return (
    <div className="flex justify-center items-center fixed bg-neutral-1000/90 backdrop-blur-xl w-full">
      <nav className="content-w flex items-center justify-center py-6 relative">
        <div className=" absolute left-0">
          <a className="text-blue-500 font-medium font-chivo-mono" href="#home">
            Mateus Felipe
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="text-neutral-400 hover:text-neutral-50 hover:cursor-pointer"
            href="#about"
          >
            Sobre mim
          </a>
          <a
            className="text-neutral-400 hover:text-neutral-50 hover:cursor-pointer"
            href="#projects"
          >
            Projetos
          </a>
          <a
            className="text-neutral-400 hover:text-neutral-50 hover:cursor-pointer"
            href="#knowledge"
          >
            Conhecimentos
          </a>
          <a
            className="text-neutral-400 hover:text-neutral-50 hover:cursor-pointer"
            href="#contact"
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
