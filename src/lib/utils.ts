export const getFrequencyOfValue = (array: [], value: unknown): number => {
  let frequency = 0

  array.forEach(element => (element === value ? frequency++ : null))

  return frequency
}

export const removeRepeatedValuesFromArray = (array: unknown[]): unknown[] => {
  return array.filter((item, index, originalArray) => {
    return originalArray.indexOf(item) === index
  })
}
