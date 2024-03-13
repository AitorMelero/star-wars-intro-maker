import { type ActionFunction, redirect, type LoaderFunction } from 'react-router-dom'
import { type ErrorValidate, type FormType } from '../types/Form'
import { validateForm } from '../schemas/form'
import { DEFAULT_INTRO_DATA } from './consts'

// Action
export const actionForm: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const data: FormType = {
    prelude: formData.get('prelude') as string,
    title: formData.get('title') as string
  }

  const validateResult = validateForm(data)

  if (validateResult === true) {
    localStorage.setItem('introData', JSON.stringify(data))
    return redirect('/intro')
  } else {
    paintValidateFormError(validateResult)
    return redirect('/')
  }
}

// Loader
export const loaderForm: LoaderFunction<FormType> = async () => {
  const data = localStorage.getItem('introData')

  if (data !== null) return JSON.parse(data)

  return DEFAULT_INTRO_DATA
}

const paintValidateFormError = (validateResult: ErrorValidate[]): void => {
  const formElement = document.getElementById('form-page')
  if (formElement !== null) {
    const spanElements = formElement.getElementsByTagName('span')
    Array.from(spanElements).forEach(span => { span.innerHTML = '' })
  }

  validateResult.forEach(({ path, message }) => {
    const errorField = document.getElementById(`${path}-error`)
    if (errorField !== null) errorField.innerHTML = message
  })
}
