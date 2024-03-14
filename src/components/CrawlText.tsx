import '../styles/CrawlText.css'
import { type IntroType } from '../types/Intro'

interface Props {
  episode: IntroType['data']['episode']
  episodeTitle: IntroType['data']['episodeTitle']
  crawlText: IntroType['data']['crawlText']
}

export const CrawlText: React.FC<Props> = ({ episode, episodeTitle, crawlText }) => {
  const crawlParagraphs = crawlText.replaceAll('\r\n', '\n').split('\n\n')

  return (
    <>
      <div className="fade"></div>

      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p className="title-episode">{episode}</p>
            <h1 className="title-film">{episodeTitle}</h1>
          </div>

          {crawlParagraphs.map((paragraph, key) => <p key={key}>{paragraph}</p>)}

        </div>
      </section>
    </>
  )
}
