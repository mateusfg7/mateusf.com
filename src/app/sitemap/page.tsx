import { ArrowUpRight, Link } from '@/shared/wrappers/phosphor-icons'
import { allRoutes } from '../lib/all-routes'

export default function Page() {
  return (
    <div className="content-container m-auto">
      <h1 className="mb-8 bg-gradient-to-br from-blue-700 to-blue-400 bg-clip-text text-center text-4xl font-bold text-transparent md:w-fit md:text-left">
        Sitemap
      </h1>
      <div className="flex flex-col gap-3">
        <a
          href="/sitemap.xml"
          target="_blank"
          className="inline-flex items-end text-xl leading-none text-blue-500 hover:text-blue-900"
        >
          <span>Sitemap XML</span>
          <ArrowUpRight className="text-sm" />
        </a>
        {allRoutes.map(url => (
          <a
            href={url}
            key={url}
            className="inline-flex items-center gap-1 hover:text-blue-800 hover:underline dark:hover:text-blue-600 md:text-lg"
          >
            <Link />
            <span>{url}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
