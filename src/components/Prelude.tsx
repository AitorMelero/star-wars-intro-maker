import '../styles/Prelude.css'

export const Prelude: React.FC = () => {
  const line1 = 'A long time ago in a galaxy far,'
  const line2 = 'far away....'

  return (
    <section className="prelude">
      <article className="prelude-container toFadeInAndOutAnimation">
        {line1}
        <br />
        {line2}
      </article>
    </section>
  )
}
