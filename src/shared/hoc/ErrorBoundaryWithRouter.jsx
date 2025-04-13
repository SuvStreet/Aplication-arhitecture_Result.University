import { useLocation } from 'react-router'

import { ErrorBoundary } from '../ui/components'

export const ErrorBoundaryWithRouter = ({ children }) => {
  const location = useLocation()

  return <ErrorBoundary location={location}>{children}</ErrorBoundary>
}
