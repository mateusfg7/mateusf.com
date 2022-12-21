export function Header() {
  return (
    <div className="flex justify-center items-center fixed bg-neutral-1000/90 backdrop-blur-xl w-full">
      <nav className="content-w flex items-center justify-center py-6 relative">
        <div className=" absolute left-0">
          <a className="text-blue-500 font-bold" href="#home">
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
          <div title="Linkedin">[X]</div>
          <div title="Github">[X]</div>
          <div title="Instagram">[X]</div>
        </div>
      </nav>
    </div>
  )
}
