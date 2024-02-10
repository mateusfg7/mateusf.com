'use client'

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  TooltipProps,
  XAxis
} from 'recharts'
import {
  NameType,
  ValueType
} from 'recharts/types/component/DefaultTooltipContent'

import { useAbsoluteTheme } from '~/hooks/useAbsoluteTheme'
import { ContributionDay } from '~/lib/github'

export function Chart({ data }: { data: ContributionDay[] }) {
  const isDarkMode = useAbsoluteTheme() === 'dark'

  return (
    <AreaChart
      width={900}
      height={220}
      data={data}
      className="cursor-pointer"
      margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#26a64160" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#26a64160" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis
        dataKey="shortDate"
        interval={0}
        tick={{ strokeWidth: 0.5, fontSize: '0.8rem' }}
      />
      <CartesianGrid
        strokeDasharray="2 3"
        stroke={isDarkMode ? '#ffffff20' : '#00000030'}
      />
      <Tooltip content={<ContributionsToolTip />} />
      <Area
        dot
        activeDot
        strokeWidth={3}
        type="monotone"
        dataKey="contributionCount"
        aria-label="count"
        stroke="#26a641"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  )
}

const ContributionsToolTip = ({
  active,
  payload
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-fit max-w-[250px] rounded-md bg-neutral-100 p-5 text-sm text-black shadow-lg dark:bg-neutral-950 dark:text-gray-200">
        <p className="label">
          <span className="font-medium">Date :</span>{' '}
          {new Date(payload[0].payload.date).toDateString()}
        </p>
        <p className="desc">
          <span className="font-medium">Commit Count :</span> {payload[0].value}
        </p>
      </div>
    )
  }

  return null
}
