import React from 'react'
import { parseISO, format } from 'date-fns'

interface Props {
  dateString: string
  dateFormat?: string
}

export const Date: React.FC<Props> = ({
  dateString,
  dateFormat = 'LLL d, yyyy'
}) => {
  const date = parseISO(dateString)

  return <time dateTime={dateString}>{format(date, dateFormat)}</time>
}
