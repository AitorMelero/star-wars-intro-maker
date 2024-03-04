import '../styles/CrawlText.css'

export const CrawlText: React.FC = () => {
  return (
    <>
      <div className="fade"></div>

      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p className="title-episode">Episode IX</p>
            <h1 className="title-film">THE RISE OF SKYWALKER</h1>
          </div>

          <p>
            The dead speak! The galaxy has heard a mysterious broadcast, a
            threat of REVENGE in the sinister voice of the late EMPEROR
            PALPATINE.
          </p>

          <p>
            GENERAL LEIA ORGANA dispatches secret agents to gather intelligence,
            while REY, the last hope of the Jedi, trains for battle against the
            diabolical FIRST ORDER.
          </p>

          <p>
            Meanwhile, Supreme Leader KYLO REN rages in search of the phantom
            Emperor, determined to destroy any threat to his power....
          </p>
        </div>
      </section>
    </>
  )
}
