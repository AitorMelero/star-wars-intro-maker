import '../styles/PlayButton.css'

interface Props {
  text?: string
  playIntro: () => void
}

export const PlayButton: React.FC<Props> = ({ text = 'Play', playIntro }) => {
  return (
    <div className="play-button-container">
      <button onClick={playIntro}>{text}</button>
    </div>
  )
}
