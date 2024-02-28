import intro from '../assets/intro.mp3'

export const Audio: React.FC = () => {
  return (
    <>
      <audio preload='auto' autoPlay>
        <source src={intro} type="audio/ogg" />
        <source src={intro} type="audio/mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
    </>
  )
}
