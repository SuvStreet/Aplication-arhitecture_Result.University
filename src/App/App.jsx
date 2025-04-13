import { AuthProvider, MantineStyleProvider } from './Provider'
import { Router } from './Router'
import { Routing } from '../Pages'

import s from './style.module.css'

export const App = () => {
  return (
    <MantineStyleProvider>
      <Router>
        <div className={s.container}>
          <div className={s.content}>
            <AuthProvider>
              <Routing />
            </AuthProvider>
          </div>
        </div>
      </Router>
    </MantineStyleProvider>
  )
}
