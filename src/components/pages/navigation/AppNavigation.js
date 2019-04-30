import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RouteComponent from './RoutesConfig'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// This is your navigator
export default () => {
    return (
      <div>
        <BrowserRouter>
          <TransitionGroup>
            <Switch>
              {RouteComponent.map(route => {
                return (
                    <Route
                      path={route.path}
                      component={route.component}
                      exact={route.exact}
                    />
                )
              })}
            </Switch>
          </TransitionGroup>
        </BrowserRouter>
      </div>
    )
}
