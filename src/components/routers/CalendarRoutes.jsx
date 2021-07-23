import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CalendarScreen } from '../../pages/CalendarScreen'
import { Navbar } from '../elements/Navbar'

export function CalendarRoutes() {
  return (
    <>
      <Navbar />
      <Switch>

        <Route path='/' component={ CalendarScreen } />
      </Switch>
    </>
  )
}
