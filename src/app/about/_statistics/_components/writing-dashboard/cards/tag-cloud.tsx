import { Tag } from '@phosphor-icons/react/dist/ssr'
import { shuffleArray } from '~/lib/shuffleArray'
import { countAllTags } from '~/lib/tags'

// https://github.com/madox2/react-tagcloud/blob/43a706b36a606ddd8a39c4060510166aebdf445e/src/helpers.js#L4
const fontSizeConverter = (
  count: number,
  lowestCount: number,
  highestCount: number,
  minSizePx: number,
  maxSizePx: number
) => {
  if (highestCount - lowestCount === 0) {
    // handle devision by zero
    return Math.round((minSizePx + maxSizePx) / 2)
  }
  return Math.round(
    ((count - lowestCount) * (maxSizePx - minSizePx)) /
      (highestCount - lowestCount) +
      minSizePx
  )
}

export async function TagCloud() {
  const tagsCount = countAllTags().map(({ count, tag }) => ({
    value: tag,
    count
  }))

  const tags: { value: string; count: number }[] = shuffleArray(
    tagsCount.sort((a, b) => b.count - a.count).slice(0, 100)
  )

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Most Used Tags</span>
        <Tag size="1em" weight="duotone" />
      </span>
      <div className="flex h-full flex-wrap gap-1 leading-none">
        {tags.map(tag => (
          <span
            key={tag.value}
            style={{
              fontSize: fontSizeConverter(
                tag.count,
                Math.min(...tags.map(tag => tag.count)),
                Math.max(...tags.map(tag => tag.count)),
                9,
                30
              ),
              opacity: Math.max(
                tag.count / Math.max(...tags.map(tag => tag.count)),
                0.8
              )
            }}
          >
            {tag.value}
          </span>
        ))}
      </div>
    </div>
  )
}
