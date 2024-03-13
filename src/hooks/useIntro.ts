import { useEffect, useState } from 'react'
import { StarWarsAudio } from '../utils/audio'

interface UseIntroType {
  isPlaying: boolean
  isPrelude: boolean
  isTitle: boolean
  playIntro: () => void
}

export const useIntro = (isPlay: boolean): UseIntroType => {
  const [isPlaying, setIsPlaying] = useState(isPlay)
  const [isPrelude, setIsPrelude] = useState(false)
  const [isTitle, setIsTitle] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      setIsPrelude(true)
    }
  }, [])

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setIsPrelude(false)
      setIsTitle(true)
      StarWarsAudio.getInstance().play()
    }, 10000)

    const crawlTimeout = setTimeout(() => {
      setIsTitle(false)
    }, 17000)

    return () => {
      clearTimeout(titleTimeout)
      clearTimeout(crawlTimeout)
    }
  }, [isPrelude])

  const playIntro = (): void => {
    setIsPlaying(true)
    setIsPrelude(true)
  }

  return {
    isPlaying,
    isPrelude,
    isTitle,
    playIntro
  }
}
