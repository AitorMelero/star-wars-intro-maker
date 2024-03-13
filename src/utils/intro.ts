import { type LoaderFunction } from 'react-router-dom'
import { DEFAULT_INTRO_DATA } from './consts'
import { type IntroType } from '../types/Intro'

export const loaderIntro: LoaderFunction<IntroType> = async () => {
  const data = localStorage.getItem('introData')
  const isPlay = localStorage.getItem('isPlay')

  if (data !== null && isPlay !== null) {
    const returnData: IntroType = {
      data: JSON.parse(data),
      isPlay: isPlay === 'true'
    }

    localStorage.setItem('isPlay', 'false')

    return returnData
  }

  localStorage.setItem('isPlay', 'false')

  return {
    data: DEFAULT_INTRO_DATA,
    isPlay: isPlay === 'true'
  }
}
