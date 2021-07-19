import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthRoutes } from './AuthRoutes'
import { CalendarRoutes } from './CalendarRoutes'

export default function AppRouter() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path='/auth' component={ AuthRoutes } />
          <Route path='/'     component={ CalendarRoutes } />
        </Switch>
      </Router>
    </div>
  )
}
