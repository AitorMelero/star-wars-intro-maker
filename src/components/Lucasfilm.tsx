import intro from '../assets/Lucasfilm.mp4'

export const Lucasfilm: React.FC = () => {
  return (
    <section className='lucasfilm-video-section'>
      <video autoPlay>
        <source src={intro} type="video/mp4" />
        Your browser does not support the <code>audio</code> element.
      </video>
    </section>
  )
}
