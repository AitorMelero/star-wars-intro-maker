import { useEffect } from 'react'
import { Form as RouterForm, useLoaderData } from 'react-router-dom'
import { type FormType } from '../types/Form'
import { Footer } from '../components/Footer'
import '../styles/FormPage.css'

export const Form: React.FC = () => {
  const { prelude, title, episode, episodeTitle, crawlText } = useLoaderData() as FormType

  useEffect(() => {
    window.scrollTo(0, 0)
    const bodyElement = document.getElementsByTagName('body')
    bodyElement[0].setAttribute('style', 'margin: 0;')
  }, [])

  return (
      <RouterForm
        id='form-page'
        className="form-page"
        method="post"
      >
        <h1 className='web-title'>Star wars intro maker</h1>
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

        <textarea name='prelude' className='form-field textarea-prelude' defaultValue={prelude} rows={2} maxLength={70} />
        <span id='prelude-error'></span>

        <textarea name='title' className='form-field textarea-title' defaultValue={title} rows={2} maxLength={70} />
        <span id='title-error'></span>

        <input type='text' name='episode' className='form-field input-episode' defaultValue={episode} maxLength={30} />
        <span id='episode-error'></span>

        <input type='text' name='episode-title' className='form-field input-episode-title' defaultValue={episodeTitle} maxLength={30} />
        <span id='episodeTitle-error'></span>

        <textarea name='crawl-text' className='form-field textarea-crawl-text' defaultValue={crawlText} maxLength={1000} />
        <span id='crawlText-error'></span>

        <button type="submit" className='form-button'>
          Play
        </button>

        <Footer />
      </RouterForm>
  )
}
