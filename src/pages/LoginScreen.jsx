import React from 'react'
import { LoginForm } from '../components/auth/LoginForm'

export function LoginScreen() {
  return (
    <div className='container-login'>
      <div className="box login__box">
        <h3 className="title is-3">
          Login
        </h3>
        <LoginForm />
      </div>
    </div>
  )
}
