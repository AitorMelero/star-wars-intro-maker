import { useEffect, useState } from 'react'
import { useAudio } from './useAudio'
import intro from '../assets/intro.mp3'

interface UseIntroType {
  isFormPage: boolean
  isPrelude: boolean
  isTitle: boolean
  playIntro: () => void
}

export const useIntro = (): UseIntroType => {
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

  return {
    isFormPage,
    isPrelude,
    isTitle,
    playIntro
  }
}
