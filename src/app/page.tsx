import { MainTitle } from './_components/main-title'
import { StartButton } from './_components/start-button'

export default function Page() {
  return (
    <div className="content-container content-vertical-spaces m-auto">
      <div className="flex flex-col items-center gap-16">
        <MainTitle />
        <StartButton />
      </div>
    </div>
  )
}
