import { CrawlText } from './CrawlText'
import { Prelude } from './Prelude'
import { Title } from './Title'
import { FormPage } from './FormPage'
import { useIntro } from '../hooks'
import '../styles/StarWarsIntro.css'

export const StarWarsIntro: React.FC = () => {
  const { isFormPage, isPrelude, isTitle, playIntro } = useIntro()

  return (
    <main className={`star-wars-intro-background ${!isFormPage ? 'star-wars-intro-background-animation' : ''}`}>
      <section className="star-background-1">
        {isFormPage
          ? <FormPage playIntro={playIntro} />
          : <>
              {isPrelude ? <Prelude /> : isTitle ? <Title /> : <CrawlText />}
            </>
        }
      </section>

      <section className="star-background-1"></section>
    </main>
  )
}
