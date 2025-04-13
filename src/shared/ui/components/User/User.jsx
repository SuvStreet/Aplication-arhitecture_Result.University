import { Button } from '../Button'

import s from './style.module.css'

export const User = ({ user, signout }) => (
  <div className={s.user}>
    {user === null ? (
      'Незнакомец'
    ) : (
      <>
        Привет,<span className={s.name}> {user}</span> /
        <Button className={s.btnSignout} onClick={signout} text="Выход" />
      </>
    )}
  </div>
)
