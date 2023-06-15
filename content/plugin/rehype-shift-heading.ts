import pluggin, { Options } from 'rehype-shift-heading'

export const options: Partial<Options> = {
  shift: 1
}

const rehypeShiftHeading = { pluggin, options }

export default rehypeShiftHeading
