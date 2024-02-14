import { useEffect, useState } from 'react'
import { Audio } from './Audio'
import { CrawlText } from './CrawlText'
import { Prelude } from './Prelude'

export const StarWarsIntro: React.FC = () => {
  const [isPrelude, setIsPrelude] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsPrelude(false)
    }, 9000)
  }, [])

  return (
    <>
      <Audio />
      {isPrelude ? <Prelude /> : <CrawlText />}
    </>
  )
}
