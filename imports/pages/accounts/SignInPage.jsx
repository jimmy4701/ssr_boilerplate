import React, {Component} from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import {Grid, Header, Loader} from 'semantic-ui-react'

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

  render(){
      return(
        <Grid stackable>
          <Grid.Column width={16}>
            <Header as="h3">MAIN_TITLE</Header>
          </Grid.Column>
        </Grid>
      )
  }
}

export default SignInPageContainer = createContainer(({}) => {

}, SignInPage)
