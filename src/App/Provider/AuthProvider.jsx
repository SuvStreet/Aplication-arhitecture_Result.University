import { createContext, useContext, useState } from 'react'
import { getItem, setItem, removeItem } from '@shared/lib/localStorage'

const AuthContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getItem('email'))

  const signin = (newUser, callback) => {
    setUser(newUser.email)
    setItem('email', newUser.email)
    callback()
  }

  const signout = (callback) => {
    setUser(null)
    removeItem('email')
    callback()
  }

  const value = {
    user,
    signin,
    signout,
  }

  return <AuthContext value={value}>{children}</AuthContext>
}
