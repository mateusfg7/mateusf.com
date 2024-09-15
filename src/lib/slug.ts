import { slug as githubSlugger } from 'github-slugger'

export const slug = (text: string) =>
  githubSlugger(text)
    .toLowerCase()
    .normalize('NFD')
    .replaceAll(/\p{M}/gu, '')
    .replaceAll(/[^a-z0-9-]/g, '-')
    .replaceAll(/-+/g, '-')
    .replaceAll(/^-|-$/g, '')
