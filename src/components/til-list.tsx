import { TIL } from '#content'

import { TilItem } from './til-item'

export function TilList({ tils }: { tils: TIL[] }) {
  return (
    <div className="flex flex-col gap-3">
      {tils
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        .map(til => (
          <TilItem til={til} key={til.date} />
        ))}
    </div>
  )
}
