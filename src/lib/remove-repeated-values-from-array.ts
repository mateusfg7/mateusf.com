export function removeRepeatedValuesFromArray<T>(array: T[]): T[] {
  return array.filter((item, index, originalArray) => {
    return originalArray.indexOf(item) === index
  })
}
