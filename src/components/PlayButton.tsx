interface Props {
  playIntro: () => void
}

export const PlayButton: React.FC<Props> = ({ playIntro }) => {
  return (
    <button onClick={playIntro}>Play</button>
  )
}
