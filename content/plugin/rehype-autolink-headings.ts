import plugin, { Options } from 'rehype-autolink-headings'

const options: Partial<Options> = {
  behavior: 'wrap'
}

const rehypeAutolinkHeadings = [plugin, options]
export default rehypeAutolinkHeadings
