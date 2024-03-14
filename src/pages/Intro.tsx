import { useLoaderData } from 'react-router-dom'
import { CrawlText } from '../components/CrawlText'
import { PlayButton } from '../components/PlayButton'
import { Prelude } from '../components/Prelude'
import { Title } from '../components/Title'
import { useIntro } from '../hooks'
import { type IntroType } from '../types/Intro'
import '../styles/StarWarsIntro.css'
import { useEffect } from 'react'

export const Intro: React.FC = () => {
  const { data, isPlay } = useLoaderData() as IntroType
  const { prelude, title, episode, episodeTitle, crawlText } = data
  const { isPlaying, isPrelude, isTitle, playIntro } = useIntro(isPlay)

  useEffect(() => {
    const mainIntroElement = document.getElementById('main-intro')

    if (mainIntroElement !== null) {
      mainIntroElement.style.transform = 'translate(0, 0)'
    }
  }, [])

  return (
    <main id='main-intro' className={`star-wars-intro-background ${isPlaying ? 'star-wars-intro-background-animation' : ''} `}>
      <section className="star-background-1">
        {!isPlaying
          ? <PlayButton playIntro={playIntro} />
          : <>
              {isPrelude
                ? <Prelude prelude={prelude} />
                : isTitle
                  ? <Title title={title} />
                  : <CrawlText episode={episode} episodeTitle={episodeTitle} crawlText={crawlText} />
              }
            </>
        }
      </section>

      <section className="star-background-1"></section>
    </main>
  )
}
