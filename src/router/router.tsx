import { createBrowserRouter } from 'react-router-dom'
import { Form } from '../pages/Form'
import { Error } from '../pages/Error'
import { Intro } from '../pages/Intro'
import { actionForm } from '../utils/form'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Form />,
    errorElement: <Error />,
    action: actionForm
  },
  {
    path: 'intro',
    element: <Intro />,
    errorElement: <Error />
  }
])
