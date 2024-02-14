import { Audio } from './Audio'
import { CrawlText } from './CrawlText'
import { Prelude } from './Prelude'

export const StarWarsIntro: React.FC = () => {
  return (
    <>
      <Audio />
      <Prelude />
      {/* <CrawlText /> */}
    </>
  )
}
