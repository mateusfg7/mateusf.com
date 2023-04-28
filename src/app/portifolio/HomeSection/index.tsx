export function HomeSection() {
  return (
    <div
      id="home"
      className="min-h-screen flex justify-center items-center relative"
    >
      <div className="md:hidden absolute h-full w-full bg-[url(/assets/portifolio/code-type.svg)] bg-no-repeat bg-center bg-fixed opacity-10" />
      <div className="portifolio-content-w flex justify-center md:justify-between items-center gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-neutral-50 text-7xl font-bold w-min md:w-max">
            Eu sou Mateus,
          </span>
          <span className="text-neutral-400 text-2xl md:text-3xl flex items-center ">
            <span className="md:inline-block md:overflow-hidden md:whitespace-nowrap md:animate-typing">
              <span>
                Desenvolvedor full-stack.
                <span className="md:hidden animate-cursor">|</span>
              </span>
            </span>
            <span className="hidden md:inline animate-cursor">|</span>
          </span>
        </div>
        <div className="hidden md:block w-64 flex-1">
          <img src="/assets/portifolio/code-type.svg" className="w-full" />
        </div>
      </div>
    </div>
  )
}
