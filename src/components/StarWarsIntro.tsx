import { useEffect, useState } from 'react'
import { Audio } from './Audio'
import { CrawlText } from './CrawlText'
import { Prelude } from './Prelude'
import { Title } from './Title'
import { Lucasfilm } from './Lucasfilm'

export const StarWarsIntro: React.FC = () => {
  const [isLucasfilmIntro, setIsLucasfilmIntro] = useState(true)
  const [isPrelude, setIsPrelude] = useState(false)
  const [isTitle, setIsTitle] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLucasfilmIntro(false)
      setIsPrelude(true)
    }, 10000)

    setTimeout(() => {
      setIsPrelude(false)
      setIsTitle(true)
    }, 19000)

    setTimeout(() => {
      setIsTitle(false)
    }, 26000)
  }, [])

  return (
    <main>
      <section className='star-background-1'>
        {isLucasfilmIntro
          ? <Lucasfilm />
          : <>
              <Audio />
              {isPrelude ? <Prelude /> : isTitle ? <Title /> : <CrawlText />}
            </>
        }
      </section>

      <section className='star-background-1'></section>
    </main>
  )
}
