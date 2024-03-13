import '../styles/Prelude.css'
import { type FormType } from '../types/Form'

interface Props {
  prelude: FormType['prelude']
}

export const Prelude: React.FC<Props> = ({ prelude }) => {
  const preludeLines = prelude.trim().split(/\r\n|\r|\n/)

  return (
    <section className="prelude">
      <article className="prelude-container toFadeInAndOutAnimation">
        {preludeLines[0]}
        <br />
        {preludeLines[1]}
      </article>
    </section>
  )
}
