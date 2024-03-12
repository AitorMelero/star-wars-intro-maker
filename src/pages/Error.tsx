import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export const Error: React.FC = () => {
  const error = useRouteError()
  let statusText = ''

  if (isRouteErrorResponse(error)) {
    statusText = error.statusText
  }

  return (
    <>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has ocurred.</p>
        <p>
          <i>{statusText}</i>
        </p>
      </div>
    </>
  )
}
