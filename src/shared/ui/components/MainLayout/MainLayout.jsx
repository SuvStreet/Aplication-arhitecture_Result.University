import { Suspense } from 'react'
import { Outlet, useNavigate } from 'react-router'

import { useAuth } from '@app/Provider'

import { Menu } from '../Menu'
import { User } from '../User'
import { ErrorBoundary } from '../ErrorBoundary'

export function MainLayout() {
  const auth = useAuth()
  const navigate = useNavigate()

  const signout = () => {
    auth.signout(() => {
      navigate('/', { replace: true })
    })
  }

  return (
    <>
      <Menu>
        <User user={auth.user} signout={signout} />
      </Menu>

      <ErrorBoundary>
        <Suspense fallback={<p>Загрузка страницы...</p>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
