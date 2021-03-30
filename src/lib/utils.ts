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
