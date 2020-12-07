/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import defaultTheme from './theme'

export type Theme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
