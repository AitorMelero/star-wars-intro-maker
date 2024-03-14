import '../styles/PlayButton.css'

interface Props {
  playIntro: () => void
  goEditIntro: () => void
}

export const PlayButton: React.FC<Props> = ({ playIntro, goEditIntro }) => {
  return (
    <div className="play-button-container">
      <button onClick={playIntro}>Play</button>
      <button onClick={goEditIntro}>Edit Intro</button>
    </div>
  )
}
