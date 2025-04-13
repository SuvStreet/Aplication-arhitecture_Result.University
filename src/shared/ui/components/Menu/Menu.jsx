import { NavLink } from 'react-router'

import s from './style.module.css'

export const Menu = ({ children }) => (
  <nav className={s.nav}>
    <ul className={s.menu}>
      <li>
        <NavLink to="/">Главная</NavLink>
      </li>
      <li>
        <NavLink to="/character">Персонажи</NavLink>
      </li>
      <li>
        <NavLink to="/location">Локации</NavLink>
      </li>
      <li>
        <NavLink to="/episode">Эпизоды</NavLink>
      </li>
    </ul>

    {children}
  </nav>
)
