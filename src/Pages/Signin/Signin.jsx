import { useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { TextInput, Button } from '@shared/ui/components'
import { validateForm } from '@shared/lib/validateForm'
import { useAuth } from '@app/Provider'

import { signinInputs } from './config/inputs'

export const Signin = () => {
  const [errors, setErrors] = useState({})
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const formRef = useRef(null)

  const handleChange = (event) => {
    const { name } = event.target

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(formRef.current)

    const formValues = Object.fromEntries(formData)

    const newErrors = validateForm(signinInputs, formValues)

    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      return
    }

    auth.signin(formValues, () => {
      navigate(from, { replace: true })
    })

    formRef.current.reset()
  }

  return (
    <div>
      <h1>Авторизоваться</h1>
      <form
        noValidate
        onSubmit={handleSubmit}
        onChange={handleChange}
        ref={formRef}
      >
        {signinInputs.map((input, index) => (
          <TextInput key={index} error={errors[input.nameInput]} {...input} />
        ))}
        <Button
          type="submit"
          variant="filled"
          size="md"
          color="green"
        >
          Авторизоваться
        </Button>
      </form>
    </div>
  )
}
