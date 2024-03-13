import { useLoaderData } from 'react-router-dom'
import { CrawlText } from '../components/CrawlText'
import { PlayButton } from '../components/PlayButton'
import { Prelude } from '../components/Prelude'
import { Title } from '../components/Title'
import { useIntro } from '../hooks'
import { type FormType } from '../types/Form'
import '../styles/StarWarsIntro.css'

interface Props {
  isPlay?: boolean
}

export const Intro: React.FC<Props> = ({ isPlay = false }) => {
  const { prelude, title } = useLoaderData() as FormType
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
