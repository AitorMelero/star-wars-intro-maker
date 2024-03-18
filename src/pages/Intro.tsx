import { useEffect } from 'react'
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
  const { prelude, title, episode, episodeTitle, crawlText } = data
  const { isPlaying, isPrelude, isTitle, playIntro, goEditIntro } = useIntro(isPlay)

  useEffect(() => {
    window.scrollTo(0, 0)
    const bodyElement = document.getElementsByTagName('body')
    bodyElement[0].setAttribute('style', 'margin: 0; overflow: hidden; transform: translateY(0);')
  }, [])

  return (
    <main
      id='main-intro'
      className={`star-wars-intro-background ${isPlaying ? 'star-wars-intro-background-animation' : ''} `}
    >
      <section className="star-background-1">
        {!isPlaying
          ? <PlayButton playIntro={playIntro} goEditIntro={goEditIntro} />
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

      <section className="star-background-1" />
    </main>
  )
}
