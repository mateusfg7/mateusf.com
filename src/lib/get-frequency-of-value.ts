export function getFrequencyOfValue<T>(array: T[], value: unknown): number {
  let frequency = 0

  array.forEach(element => (element === value ? frequency++ : null))

  return frequency
}
