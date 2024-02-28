import { useEffect, useState } from 'react'
import { Audio } from './Audio'
import { CrawlText } from './CrawlText'
import { Prelude } from './Prelude'
import { Title } from './Title'

export const StarWarsIntro: React.FC = () => {
  const [isPrelude, setIsPrelude] = useState(true)
  const [isTitle, setIsTitle] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsPrelude(false)
      setIsTitle(true)
    }, 9000)

    setTimeout(() => {
      setIsTitle(false)
    }, 16000)
  }, [])

  return (
    <main>
      <section className="star-background-1">
        <Audio />
        {isPrelude ? <Prelude /> : isTitle ? <Title /> : <CrawlText />}
      </section>

      <section className="star-background-1">
      </section>
    </main>
  )
}
