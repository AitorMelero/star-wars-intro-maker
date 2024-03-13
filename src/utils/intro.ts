import { type LoaderFunction } from 'react-router-dom'
import { type FormType } from '../types/Form'
import { DEFAULT_INTRO_DATA } from './consts'

export const loaderIntro: LoaderFunction<FormType> = async () => {
  const data = localStorage.getItem('introData')

  if (data !== null) return JSON.parse(data)

  return DEFAULT_INTRO_DATA
}
