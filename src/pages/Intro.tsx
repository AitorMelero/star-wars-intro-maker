import { useLoaderData } from 'react-router-dom'
import { CrawlText } from '../components/CrawlText'
import { PlayButton } from '../components/PlayButton'
import { Prelude } from '../components/Prelude'
import { Title } from '../components/Title'
import { useIntro } from '../hooks'
import { type IntroType } from '../types/Intro'
import '../styles/StarWarsIntro.css'

export const Intro: React.FC = () => {
  const { data, isPlay } = useLoaderData() as IntroType
  const { prelude, title } = data
  const { isPlaying, isPrelude, isTitle, playIntro } = useIntro(isPlay)

  return (
    <main className={`star-wars-intro-background ${isPlaying ? 'star-wars-intro-background-animation' : ''} `}>
      <section className="star-background-1">
        {!isPlaying
          ? <PlayButton playIntro={playIntro} />
          : <>
              {isPrelude
                ? <Prelude prelude={prelude} />
                : isTitle ? <Title title={title} /> : <CrawlText />
              }
            </>
        }
      </section>

      <section className="star-background-1"></section>
    </main>
  )
}
