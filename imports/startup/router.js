import React, { Component } from 'react'
import { Meteor }           from 'meteor/meteor'

import {
  BrowserRouter as Router,
  Switch
}                           from 'react-router-dom'

import Public               from "/imports/components/routes/Public"

import MainLayout           from "/imports/layouts/MainLayout"
import { authenticated }    from "/imports/containers/authenticated"

console.log("CLIENT: APPEL DE ROUTER");

const App = appProps => (
  <Router>
    <Switch>
      <Public component={ MainLayout } path="/" {...appProps} />
    </Switch>
  </Router>
)


export default authenticated(App)
