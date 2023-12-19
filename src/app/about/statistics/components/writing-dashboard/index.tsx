import { MostUsedCategories } from './cards/most-used-category'
import { Posts } from './cards/posts'
import { TagCloud } from './cards/tag-cloud'
import { TILs } from './cards/tils'

export function WritingDashboard() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      <Posts />
      <TILs />

      <div className="col-span-2 md:row-span-3">
        <TagCloud />
      </div>

      <div className="col-span-2 md:row-span-2">
        <MostUsedCategories />
      </div>
    </div>
  )
}
