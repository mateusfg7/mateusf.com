export const getFrequencyOfValue = (array: [], value: unknown): number => {
  let frequency = 0

  array.forEach(element => (element === value ? frequency++ : null))

  return frequency
}
