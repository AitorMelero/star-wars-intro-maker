import { useEffect } from 'react'

interface UseAudioType {
  playAudio: () => Promise<void>
}

export const useAudio = (file: string): UseAudioType => {
  const audio = new Audio(file)

  useEffect(() => {
    audio.preload = 'auto'
    audio.loop = false
  }, [])

  const playAudio = async (): Promise<void> => {
    await audio.play()
  }

  return {
    playAudio
  }
}
