import plugin, { Options } from 'rehype-shift-heading'

export const options: Partial<Options> = {
  shift: 1
}

const rehypeShiftHeadings = [plugin, options]
export default rehypeShiftHeadings
