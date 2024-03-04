import '../styles/Title.css'

export const Title: React.FC = () => {
  const line1 = 'StaR'
  const line2 = 'waRS'

  return (
    <header className="star-wars-title-header">
      <h1 className="star-wars-title">
        {line1}
        <br />
        {line2}
      </h1>
    </header>
  )
}
