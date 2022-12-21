export function ContactSection() {
  return (
    <div
      id="contact"
      className="min-h-screen flex justify-center py-20 bg-neutral-900"
    >
      <div className="content-w">
        <div className="w-full text-center mb-20">
          <h1 className="text-blue-500 text-4xl">Entre em contato!</h1>
        </div>
        <div className="flex justify-center flex-wrap gap-10">
          <div className="flex flex-col items-center gap-6 border border-neutral-800 rounded-3xl p-12">
            <h2 className="text-xl text-green-300">[X] Whatsapp</h2>
            <span className="text-lg">+55 (37) 99844-0073</span>
            <a
              href="#"
              className="text-green-300 border border-green-300 p-3 rounded-xl hover:bg-green-300/10"
            >
              Enviar mensagem
            </a>
          </div>
          <div className="flex flex-col items-center gap-6 border border-neutral-800 rounded-3xl p-12">
            <h2 className="text-xl text-red-300">[X] Email</h2>
            <span className="text-lg">mateusfelipefg77@gmail.com</span>
            <a
              href="#"
              className="text-red-300 border border-red-300 p-3 rounded-xl hover:bg-red-300/10"
            >
              Enviar mensagem
            </a>
          </div>
          <div className="flex flex-col items-center gap-6 border border-neutral-800 rounded-3xl p-12">
            <h2 className="text-xl text-sky-500">[X] Linkedin</h2>
            <span className="text-lg">linkedin.com/in/mateusfg</span>
            <a
              href="#"
              className="text-sky-500 border border-sky-500 p-3 rounded-xl hover:bg-sky-500/10"
            >
              Visualizar perfil
            </a>
          </div>
          <div className="flex flex-col items-center gap-6 border border-neutral-800 rounded-3xl p-12">
            <h2 className="text-xl text-stone-200">[X] Github</h2>
            <span className="text-lg">github.com/mateusfg7</span>
            <a
              href="#"
              className="text-stone-200 border border-stone-200 p-3 rounded-xl hover:bg-stone-200/10"
            >
              Visualizar perfil
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
