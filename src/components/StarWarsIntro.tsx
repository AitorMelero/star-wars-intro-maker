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
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsTitle(false)
    }, 7000)
  }, [isPrelude])

  return (
    <>
      <Audio />
      {isPrelude ? <Prelude /> : isTitle ? <Title /> : <CrawlText />}
    </>
  )
}
