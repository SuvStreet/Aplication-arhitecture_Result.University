import { faAt, faKey } from '@fortawesome/free-solid-svg-icons'

export const signinInputs = [
  {
    required: true,
    label: 'Email',
    description: 'Ваш email',
    placeholder: 'email',
    iconCode: faAt,
    type: 'email',
    nameInput: 'email',
  },
  {
    required: true,
    label: 'Password',
    description: 'Ваш пароль',
    placeholder: 'пароль',
    iconCode: faKey,
    type: 'password',
    nameInput: 'password',
  },
]
