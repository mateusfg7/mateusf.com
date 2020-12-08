import React from 'react'
import { parseISO, format } from 'date-fns'

interface Props {
  dateString: string
}

const Date: React.FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)

  return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>
}

export default Date
