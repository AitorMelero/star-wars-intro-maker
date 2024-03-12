import { type ActionFunction, Form as RouterForm, redirect } from 'react-router-dom'
import '../styles/FormPage.css'

export const actionForm: ActionFunction = async ({ request, params }) => {
  // const formData = await request.formData()
  console.log(request)
  console.log(params)
  return redirect('/intro')
}

export const Form: React.FC = () => {
  return (
    <RouterForm className="form-page" method="post" action="/">
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

      <button type="submit">
        Play
      </button>

    </RouterForm>
  )
}
