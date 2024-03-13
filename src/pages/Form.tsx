import { Form as RouterForm, useLoaderData } from 'react-router-dom'
import { type FormType } from '../types/Form'
import '../styles/FormPage.css'

export const Form: React.FC = () => {
  const { prelude, title, episode, episodeTitle, crawlText } = useLoaderData() as FormType

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

      <textarea name='prelude' className='textarea-prelude' defaultValue={prelude} rows={2} />
      <span id='prelude-error'></span>

      <textarea name='title' className='textarea-title' defaultValue={title} rows={2} />
      <span id='title-error'></span>

      <textarea name='episode' className='textarea-episode' defaultValue={episode} />
      <span id='episode-error'></span>

      <textarea name='episode-title' className='textarea-episode-title' defaultValue={episodeTitle} />
      <span id='episode-title-error'></span>

      <textarea name='crawl-text' className='textarea-crawl-text' defaultValue={crawlText} />
      <span id='crawl-text-error'></span>

      <button type="submit">
        Play
      </button>

    </RouterForm>
  )
}
