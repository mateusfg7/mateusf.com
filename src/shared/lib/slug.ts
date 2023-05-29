import { slug as githubSlugger } from 'github-slugger'

export const slug = (text: string) =>
  githubSlugger(text).toLowerCase().normalize('NFD').replaceAll(/\p{M}/gu, '')
