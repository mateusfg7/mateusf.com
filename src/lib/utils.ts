import { slug as githubSlugger } from 'github-slugger'

export function removeRepeatedValuesFromArray<T>(array: T[]): T[] {
  return array.filter((item, index, originalArray) => {
    return originalArray.indexOf(item) === index
  })
}

export const slug = (text: string) =>
  githubSlugger(text).toLowerCase().normalize('NFD').replaceAll(/\p{M}/gu, '')
