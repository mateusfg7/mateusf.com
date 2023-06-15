import pluggin, { Options } from 'rehype-autolink-headings'

const options: Partial<Options> = {
  behavior: 'wrap'
}

const rehypeAutolinkHeadings = { pluggin, options }

export default rehypeAutolinkHeadings
