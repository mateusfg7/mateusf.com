export function ApiError({
  message,
  url,
  status
}: {
  message: string
  url: string
  status: number
}) {
  this.message = `Error "${message}" on ${url}, status code ${status}.`
  this.status = status
}
