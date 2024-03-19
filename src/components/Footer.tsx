import { Link } from './Link'
import '../styles/Footer.css'
import { LinkedInSVG } from './LinkedInSVG'
import { GitHubSVG } from './GitHubSVG'

export const Footer: React.FC = () => {
  return (
    <footer>
      <Link
        name="LinkedIn"
        url="https://www.linkedin.com/in/aitor-melero-pic%C3%B3n-678105293/"
        svg={<LinkedInSVG />}
      />
      <Link
        name="GitHub"
        url="https://github.com/AitorMelero/stars-wars-intro-maker"
        svg={<GitHubSVG />}
      />
    </footer>
  )
}
