import React, { Component } from 'react'
import { Meteor }           from 'meteor/meteor'

import { Route } from 'react-router-dom'

console.log("SERVER/CLIENT: Appel de Public");

const Public = ({ loggingIn, authenticated, isMobile, component, ...rest }) => (
  <Route {...rest} render={(props) => React.createElement(component, { ...props, isMobile, loggingIn, authenticated })} />
)

export default Public
