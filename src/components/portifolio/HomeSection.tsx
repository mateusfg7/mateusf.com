export function HomeSection() {
  return (
    <div id="home" className="min-h-screen flex justify-center items-center">
      <div className="content-w flex justify-between items-center gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-neutral-50 text-7xl font-bold">
            Eu sou Mateus,
          </span>
          <span className="text-neutral-400 text-3xl flex items-center ">
            <span className="inline-block overflow-hidden whitespace-nowrap animate-typing">
              <span>Desenvolvedor full-stack.</span>
            </span>
            <span className="animate-cursor">|</span>
          </span>
        </div>
        <div className="flex-1">
          <img src="/assets/portifolio/code-type.svg" className="w-full" />
        </div>
      </div>
    </div>
  )
}
