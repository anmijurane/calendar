import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../../pages/LoginScreen';

export function AuthRoutes() {
  return (
    <Switch>
      <Route path='/auth/login' component={ LoginScreen } />
    </Switch>
  )
}
