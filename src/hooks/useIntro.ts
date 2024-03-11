import { useEffect, useState } from 'react'
import { useAudio } from './useAudio'
import intro from '../assets/intro.mp3'

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
  const { playAudio } = useAudio(intro)

  useEffect(() => {
    if (isPlaying) {
      setIsPrelude(true)
    }
  }, [])

  useEffect(() => {
    if (isPrelude) {
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
