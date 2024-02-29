import '../styles/FormPage.css'

interface Props {
  playIntro: () => void
}

export const FormPage: React.FC<Props> = ({ playIntro }) => {
  return (
    <form className="form-page">
      <button type="button" onClick={playIntro}>
        Play
      </button>
    </form>
  )
}
