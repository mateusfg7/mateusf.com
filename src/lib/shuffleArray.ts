export function shuffleArray<T>(array: T) {
  if (!Array.isArray(array)) throw new Error('"array" is not an array')

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
