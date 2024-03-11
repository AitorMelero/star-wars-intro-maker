import { useForm } from 'react-hook-form'
import '../styles/FormPage.css'

interface Inputs {
  prelude: string
}

export const Form: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
  const preludeDefault = 'A long time ago in a galaxy far,\nfar away....'

  console.log(watch('prelude'))

  const onSubmit = (): void => {
    // handleSubmit(onSubmitForm)
    // playIntro()
  }

  return (
    <form className="form-page" onSubmit={onSubmit}>
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

      <textarea defaultValue={preludeDefault} {...register('prelude', { required: true })} />
      {errors.prelude !== undefined && <span>This field is required</span>}

      <button type="submit">
        Play
      </button>
    </form>
  )
}
