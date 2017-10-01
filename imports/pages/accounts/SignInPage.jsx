import React, {Component} from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import {Grid, Header, Container} from 'semantic-ui-react'
import SignInForm from '/imports/components/accounts/SignInForm'

export class SignInPage extends Component{

  /*
    required props:
      - none
  */

  constructor(props){
    super(props);
    this.state = {

    }
  }

  onSignIn(){

  }

  render(){
      return(
        <Container>
          <Grid stackable>
            <Grid.Column width={16} className="center-align">
              <Header as="h3" className="wow fadeInUp">SIGN IN PAGE</Header>
            </Grid.Column>
            <Grid.Column width={16} className="center-align">
              <SignInForm onSignIn={this.onSignIn.bind(this)} />
            </Grid.Column>
          </Grid>
        </Container>
      )
  }
}

export default SignInPageContainer = createContainer(({}) => {
  return {}
}, SignInPage)
