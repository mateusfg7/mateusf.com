import { ArrowUpRight, Link } from '@phosphor-icons/react/dist/ssr'
import { Title } from '~/components/title'
import { allRoutes } from '../_lib/all-routes'

export default function Page() {
  return (
    <div className="content-container m-auto">
      <Title text="Sitemap" />
      <div className="flex flex-col gap-3">
        <a
          href="/sitemap.xml"
          target="_blank"
          className="inline-flex items-end text-xl leading-none text-blue-500 hover:text-blue-900"
        >
          <span>Sitemap XML</span>
          <ArrowUpRight size="1em" className="text-sm" />
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
