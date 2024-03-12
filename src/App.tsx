import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'

const App = (): JSX.Element => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
