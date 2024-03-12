import { type ActionFunction, Form as RouterForm, redirect } from 'react-router-dom'
import '../styles/FormPage.css'
import { useEffect, useState } from 'react'

export const actionForm: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  // console.log('Action: ', formData.get('prelude'))
  console.log('Action: ', formData)
  // console.log(request)
  // console.log(params)
  const error = true
  if (error) {
    return redirect('/')
  } else {
    return redirect('/intro')
  }
}

export const Form: React.FC = () => {
  const [error, setError] = useState(false)

  useEffect(() => {
    console.log('useEffect')
  }, [])

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
