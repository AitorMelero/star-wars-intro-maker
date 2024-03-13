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
    let titleTimeout: NodeJS.Timeout

    if (isPrelude) {
      titleTimeout = setTimeout(() => {
        setIsPrelude(false)
        setIsTitle(true)
        StarWarsAudio.getInstance().play()
      }, 10000)
    }
    return () => {
      clearTimeout(titleTimeout)
    }
  }, [isPrelude])

  useEffect(() => {
    let crawlTimeout: NodeJS.Timeout

    if (isTitle) {
      crawlTimeout = setTimeout(() => {
        setIsTitle(false)
      }, 7000)
    }
    return () => {
      clearTimeout(crawlTimeout)
    }
  }, [isTitle])

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
