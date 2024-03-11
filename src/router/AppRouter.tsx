import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Form } from '../pages/Form'
import { Intro } from '../pages/Intro'
import { NotFound } from '../pages/NotFound'

export const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Form />}
        />
        <Route
          path='/intro'
          element={<Intro />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}
