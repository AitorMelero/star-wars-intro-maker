import { useEffect, useState } from 'react'
import { CrawlText } from './CrawlText'
import { Prelude } from './Prelude'
import { Title } from './Title'
import { FormPage } from './FormPage'
import intro from '../assets/intro.mp3'
import { useAudio } from '../hooks/useAudio'

export const StarWarsIntro: React.FC = () => {
  const [isFormPage, setIsFormPage] = useState(true)
  const [isPrelude, setIsPrelude] = useState(false)
  const [isTitle, setIsTitle] = useState(false)
  const { playAudio } = useAudio(intro)

  useEffect(() => {
    if (!isFormPage) {
      setTimeout(() => {
        setIsPrelude(false)
        setIsTitle(true)
        playAudio().catch((error) => {
          console.log(error)
        })
      }, 10000)

      setTimeout(() => {
        setIsTitle(false)
      }, 17000)
    }
  }, [isFormPage])

  const playIntro = (): void => {
    setIsFormPage(false)
    setIsPrelude(true)
  }

  return (
    <main>
      <section className="star-background-1">
        {isFormPage
          ? (
          <FormPage playIntro={playIntro} />
            )
          : (
          <>{isPrelude ? <Prelude /> : isTitle ? <Title /> : <CrawlText />}</>
            )}
      </section>

      <section className="star-background-1"></section>
    </main>
  )
}
