import { Form as RouterForm } from 'react-router-dom'
import '../styles/FormPage.css'

export const Form: React.FC = () => {
  return (
    <RouterForm
      id='form-page'
      className="form-page"
      method="post"
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
      <span id='prelude-error'></span>

      <br />

      <textarea name='title' rows={2} />
      <span id='title-error'></span>

      <button type="submit">
        Play
      </button>

    </RouterForm>
  )
}
