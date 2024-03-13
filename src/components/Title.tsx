import '../styles/Title.css'
import { type FormType } from '../types/Form'

interface Props {
  title: FormType['title']
}

export const Title: React.FC<Props> = ({ title }) => {
  const titleLines = title.trim().split(/\r\n|\r|\n/)

  return (
    <header className="star-wars-title-header">
      <h1 className="star-wars-title">
        {titleLines[0]}
        <br />
        {titleLines[1]}
      </h1>
    </header>
  )
}
