import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CalendarScreen } from '../../pages/CalendarScreen'

export function CalendarRoutes() {
  return (
    <div className="">
      <Switch>
        <Route path='/' component={ CalendarScreen } />
      </Switch>
    </div>
  )
}
