import '../styles/Link.css'

interface Props {
  name: string
  url: string
  svg: string
}

export const Link: React.FC<Props> = ({ name, url, svg }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="contact-link"
    >
      <img src={svg} alt={`${name} image`} />
      <span>{name}</span>
    </a>
  )
}
