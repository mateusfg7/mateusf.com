'use client'

function padZero(n: number) {
  if (n < 10) return `0${n}`
  else return n
}

export function RenderDate({ date }: { date: Date }) {
  const calendar = `${padZero(date.getDate())}/${padZero(
    date.getMonth() + 1
  )}/${padZero(date.getFullYear())}`
  const timestamp = `${padZero(date.getHours())}:${padZero(
    date.getMinutes()
  )}:${padZero(date.getSeconds())}`

  return (
    <span>
      {calendar} {timestamp}
    </span>
  )
}
