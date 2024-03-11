import '../styles/PlayButton.css'

interface Props {
  playIntro: () => void
}

export const PlayButton: React.FC<Props> = ({ playIntro }) => {
  return (
    <div className="play-button-container">
      <button onClick={playIntro}>Play</button>
    </div>
  )
}
