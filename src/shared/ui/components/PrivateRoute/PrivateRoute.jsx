import { Navigate, useLocation } from 'react-router'
import { useAuth } from '@app/Provider'

export function PrivateRoute({ children }) {
  const auth = useAuth()
  const location = useLocation()

  if (auth.user === null) {
    return <Navigate to="/signin" replace state={{ from: location }} />
  }

  return children
}
