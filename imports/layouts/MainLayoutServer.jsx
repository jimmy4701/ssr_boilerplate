import React, { Component } from "react"

//packages
import { Switch } from 'react-router-dom'
import { Helmet } from "react-helmet"

//components
import Public from "/imports/components/routes/Public"

//pages
import Landing from "/imports/pages/Landing"
import NotFound from "/imports/pages/NotFound"

export default class MainLayoutServer extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.setState({ loading: false })
  }

  render(){
    const { loading } = this.state
    console.log("SERVER: APPEL DE MAIN LAYOUT SERVER");

    return(
      <div id="main-layout">

        <Helmet>
          <title>BoilerPlate</title>
          <meta name="robots" content="noindex"/>
        </Helmet>

        <main>
          <Switch>
            <Public component={ Landing }  exact path="/"       { ...this.props } />
            <Public component={ NotFound } path="*"  { ...this.props } />
          </Switch>
        </main>
      </div>
    )
  }
}