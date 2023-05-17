import { slug as githubSlugger } from 'github-slugger'

export function getFrequencyOfValue<T>(array: T[], value: unknown): number {
  let frequency = 0

  array.forEach(element => (element === value ? frequency++ : null))

  return frequency
}

export function removeRepeatedValuesFromArray<T>(array: T[]): T[] {
  return array.filter((item, index, originalArray) => {
    return originalArray.indexOf(item) === index
  })
}

export const slug = (text: string) =>
  githubSlugger(text).toLowerCase().normalize('NFD').replaceAll(/\p{M}/gu, '')
