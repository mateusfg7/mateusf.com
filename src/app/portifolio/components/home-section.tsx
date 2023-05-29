export function HomeSection() {
  return (
    <div
      id="home"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="absolute h-full w-full bg-[url(/assets/portifolio/code-type.svg)] bg-fixed bg-center bg-no-repeat opacity-10 md:hidden" />
      <div className="portifolio-content-w flex items-center justify-center gap-12 md:justify-between">
        <div className="flex flex-col gap-4">
          <span className="w-min text-7xl font-bold text-neutral-50 md:w-max">
            Eu sou Mateus,
          </span>
          <span className="flex items-center text-2xl text-neutral-400 md:text-3xl ">
            <span className="md:inline-block md:animate-typing md:overflow-hidden md:whitespace-nowrap">
              <span>
                Desenvolvedor full-stack.
                <span className="animate-cursor md:hidden">|</span>
              </span>
            </span>
            <span className="hidden animate-cursor md:inline">|</span>
          </span>
        </div>
        <div className="hidden w-64 flex-1 md:block">
          <img src="/assets/portifolio/code-type.svg" className="w-full" />
        </div>
      </div>
    </div>
  )
}
