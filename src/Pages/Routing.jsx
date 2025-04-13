import { Route, Routes } from 'react-router'

import { Category, Detail, Home, NotFound, Signin } from './PagesLoader'
import { MainLayout } from '../shared/ui/components/MainLayout'
import { PrivateRoute } from '../shared/ui/components/PrivateRoute'

export const Routing = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/:category"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="/:category/:id"
          element={
            <PrivateRoute>
              <Detail />
            </PrivateRoute>
          }
        />
        <Route path="/signin" element={<Signin />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
