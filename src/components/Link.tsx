import '../styles/Link.css'

interface Props {
  name: string
  url: string
  svg: JSX.Element
}

export const Link: React.FC<Props> = ({ name, url, svg }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="contact-link"
    >
      {svg}
      <span>{name}</span>
    </a>
  )
}
