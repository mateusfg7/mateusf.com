export const getFrequencyOfValue = (array: any[], value: unknown): number => {
  let frequency = 0

  array.forEach(element => (element === value ? frequency++ : null))

  return frequency
}

export const removeRepeatedValuesFromArray = (array: any[]): any[] => {
  return array.filter((item, index, originalArray) => {
    return originalArray.indexOf(item) === index
  })
}

import md5 from 'blueimp-md5'

export function getHashHeaderOfData(data: string | number): string {
  const hash = md5(data.toString())
  const hashHeader = hash.substring(0, hash.length / 2)

  return hashHeader
}
