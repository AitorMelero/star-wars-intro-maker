import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StarWarsAudio } from '../utils/audio'

interface UseIntroType {
  isPlaying: boolean
  isPrelude: boolean
  isTitle: boolean
  playIntro: () => void
  goEditIntro: () => void
}

export const useIntro = (isPlay: boolean): UseIntroType => {
  const [isPlaying, setIsPlaying] = useState(isPlay)
  const [isPrelude, setIsPrelude] = useState(false)
  const [isTitle, setIsTitle] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isPlaying) {
      setIsPrelude(true)
    }
  }, [])

  // Intro time
  useEffect(() => {
    let finishTimeout: NodeJS.Timeout

    if (isPlaying) {
      finishTimeout = setTimeout(() => {
        setIsPlaying(false)
      }, 89000)
    }
    return () => {
      clearTimeout(finishTimeout)
    }
  }, [isPlaying])

  // Prelude time
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

  // Title time
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
    StarWarsAudio.getInstance().pause()
    setIsPlaying(true)
    setIsPrelude(true)
  }

  const goEditIntro = (): void => {
    navigate('/')
  }

  return {
    isPlaying,
    isPrelude,
    isTitle,
    playIntro,
    goEditIntro
  }
}
