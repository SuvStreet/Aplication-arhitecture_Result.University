import { Button } from '../Button'

import s from './style.module.css'

export const User = ({ user, signout }) => (
  <div className={s.user}>
    {user === null ? (
      'Незнакомец'
    ) : (
      <>
        Привет,<span className={s.name}> {user}</span> /
        <Button
          onClick={signout}
          variant="transparent"
          color="rgba(255, 0, 0, 1)"
        >
          Выход
        </Button>
      </>
    )}
  </div>
)
