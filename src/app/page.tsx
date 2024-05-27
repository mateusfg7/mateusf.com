import { AboutMe } from './_components/about-me'
import { Grid } from './_components/grid'
import { MainTitle } from './_components/main-title'
import { StartButton } from './_components/start-button'

export default function Page() {
  return (
    <div className="content-container content-vertical-spaces m-auto space-y-28">
      <div className="flex flex-col items-center gap-24">
        <MainTitle />
        <StartButton />
      </div>
      <Grid />
      <AboutMe />
    </div>
  )
}
