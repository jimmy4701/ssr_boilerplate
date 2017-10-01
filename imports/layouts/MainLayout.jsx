import React, { Component } from "react"

//packages
import { Switch }           from 'react-router-dom'
import { Helmet }           from "react-helmet"

// Components
import Navbar from '/imports/components/navigation/Navbar'

// routes
import Public from '/imports/components/routes/Public'

// Pages
import Landing from '/imports/pages/general/Landing'
import Conditions from '/imports/pages/general/Conditions'
import SignInPage from '/imports/pages/accounts/SignInPage'
import SignUpPage from '/imports/pages/accounts/SignUpPage'
import NotFound from '/imports/pages/general/NotFound'

export default class MainLayout extends Component {
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

    return(
      <div id="main-layout">

        <Helmet>
          <title>BoilerPlate</title>
          <meta name="robots" content="noindex"/>
        </Helmet>

        <main>
          <Navbar {...this.props}/>
          <Switch>
            <Public component={ Landing }  exact path="/" { ...this.props } />
            <Public component={ Conditions }  exact path="/conditions" { ...this.props } />
            <Public component={ SignUpPage }  exact path="/sign_up" { ...this.props } />
            <Public component={ SignInPage }  exact path="/sign_in" { ...this.props } />
            <Public component={ NotFound } path="*"  { ...this.props } />
          </Switch>
        </main>

      </div>
    )
  }
}
