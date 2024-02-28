import { useEffect, useState } from 'react'
import { CrawlText } from './CrawlText'
import { Prelude } from './Prelude'
import { Title } from './Title'
import { FormPage } from './FormPage'
import intro from '../assets/intro.mp3'

export const StarWarsIntro: React.FC = () => {
  const [isFormPage, setIsFormPage] = useState(true)
  const [isPrelude, setIsPrelude] = useState(false)
  const [isTitle, setIsTitle] = useState(false)
  const audio = new Audio(intro)

  useEffect(() => {
    audio.preload = 'auto'
    audio.loop = false
  }, [])

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

  const playAudio = async (): Promise<void> => {
    await audio.play()
  }

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
