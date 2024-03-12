import { type ActionFunction, Form as RouterForm, redirect } from 'react-router-dom'
import { useState } from 'react'
import { validateForm } from '../schemas/form'
import '../styles/FormPage.css'
import { type FormType } from '../types/Form'

export const actionForm: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const data: FormType = {
    prelude: formData.get('prelude') as string
  }

  const validateResult = validateForm(data)

  if (validateResult === true) {
    return redirect('/intro')
  } else {
    return redirect('/')
  }
}

export const Form: React.FC = () => {
  const [error, setError] = useState(false)

  const onSubmit = (): void => {
    console.log('Onsubmit: ')
    setError(true)
  }

  return (
    <RouterForm
      className="form-page"
      method="post"
      onSubmit={onSubmit}
    >
      <h1>Star Wars Intro Maker</h1>
      <p>
        Based on the Kassel Labs{' '}
        <a
          href="https://starwarsintrocreator.kassellabs.io/"
          target='_blank'
          rel='noreferrer'
        >
          web
        </a>
      </p>

      <textarea name='prelude' />
      {error && <span>This field is required</span>}

      <button type="submit">
        Play
      </button>

    </RouterForm>
  )
}
