import { IoLogoJavascript } from 'react-icons/io'
import {
  SiAdobephotoshop,
  SiCss3,
  SiDeno,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastify,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiRust,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'

export function KnowledgeSection() {
  return (
    <div
      id="conhecimentos"
      className="min-h-screen flex justify-center py-20 border-t border-neutral-800"
    >
      <div className="content-w">
        <div className="w-full text-center mb-20">
          <h1 className="text-blue-500 text-4xl">Em que me destaco</h1>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-neutral-900 rounded-3xl p-10 flex flex-col items-center gap-4">
            <h2 className="text-neutral-50 text-xl mb-7">
              Linguagens de programação
            </h2>
            <div className="w-full h-full flex justify-center">
              <div className="h-full grid grid-cols-2 gap-x-10 gap-y-5">
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiJavascript />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Javascript</span>
                    <span className="text-neutral-400">Avançado</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiTypescript />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Typescript</span>
                    <span className="text-neutral-400">Avançado</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiPython />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Python</span>
                    <span className="text-neutral-400">Intermediário</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiRust />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Rust</span>
                    <span className="text-neutral-400">Iniciante</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-10 flex flex-col items-center gap-4">
            <h2 className="text-neutral-50 text-xl mb-7">
              Desenvolvimento Web
            </h2>
            <div className="w-full h-full flex justify-center">
              <div className="h-full grid grid-cols-2 gap-x-10 gap-y-5">
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiHtml5 />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">HTML</span>
                    <span className="text-neutral-400">Avançado</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiCss3 />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">CSS</span>
                    <span className="text-neutral-400">Avançado</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiReact />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">ReactJS</span>
                    <span className="text-neutral-400">Intermediário</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiNextdotjs />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">NextJS</span>
                    <span className="text-neutral-400">Intermediário</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiTailwindcss />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Tailwind CSS</span>
                    <span className="text-neutral-400">Avançado</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiStyledcomponents />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Styled Components</span>
                    <span className="text-neutral-400">Avançado</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-10 flex flex-col items-center gap-4">
            <h2 className="text-neutral-50 text-xl mb-7">
              Desenvolvimento Back-end
            </h2>
            <div className="w-full h-full flex justify-center">
              <div className="h-full grid grid-cols-2 gap-x-10 gap-y-5">
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiNodedotjs />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">NodeJS</span>
                    <span className="text-neutral-400">Intermediário</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiDeno />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Deno</span>
                    <span className="text-neutral-400">Iniciante</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiPrisma />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Prisma</span>
                    <span className="text-neutral-400">Intermediário</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiExpress />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Express</span>
                    <span className="text-neutral-400">Intermediário</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiNestjs />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">NestJS</span>
                    <span className="text-neutral-400">Iniciante</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiFastify />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Fastify</span>
                    <span className="text-neutral-400">Iniciantes</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiNginx />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">NGINX</span>
                    <span className="text-neutral-400">Iniciantes</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-10 flex flex-col items-center gap-4">
            <h2 className="text-neutral-50 text-xl mb-7 text-center">
              Desenvolvimento Mobile e Outras Ferramentas
            </h2>
            <div className="w-full h-full flex justify-center">
              <div className="h-full grid grid-cols-2 gap-x-10 gap-y-5">
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiReact />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">React-Native</span>
                    <span className="text-neutral-400">Intermediário</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiExpo />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Expo</span>
                    <span className="text-neutral-400">Intermediário</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiGit />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">GIT</span>
                    <span className="text-neutral-400">Avançado</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiGithub />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Github</span>
                    <span className="text-neutral-400">Avançado</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiDocker />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Docker</span>
                    <span className="text-neutral-400">Intermediário</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiLinux />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Linux</span>
                    <span className="text-neutral-400">Intermediário</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiFigma />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Figma</span>
                    <span className="text-neutral-400">Intermediário</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="p-px text-neutral-50 text-xl">
                    <SiAdobephotoshop />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-neutral-50">Photoshop</span>
                    <span className="text-neutral-400">Intermediário</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
