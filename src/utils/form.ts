import { type ActionFunction, redirect } from 'react-router-dom'
import { type ErrorValidate, type FormType } from '../types/Form'
import { validateForm } from '../schemas/form'

export const actionForm: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const data: FormType = {
    prelude: formData.get('prelude') as string,
    title: formData.get('title') as string
  }

  const validateResult = validateForm(data)

  if (validateResult === true) {
    return redirect('/intro')
  } else {
    paintError(validateResult)
    return redirect('/')
  }
}

const paintError = (validateResult: ErrorValidate[]): void => {
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
