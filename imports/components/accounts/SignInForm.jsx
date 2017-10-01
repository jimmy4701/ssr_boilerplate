import React, {Component} from 'react'
import {Form, Button, Input} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class SignInForm extends Component{

  /*
    required props:
      - none

    facultative props:
      - onSignIn: Function
  */

  constructor(props){
    super(props);
    this.state = {

    }
  }

  handleChange(attr, e){
    let state = this.state
    state[attr] = e.target.value
    this.setState(state)
  }

  connect(e){
    e.preventDefault()
    const {username, password} = this.state
    const {onSignIn} = this.props
    Meteor.loginWithPassword(username, password, (error, result) => {
      if(error){
        Bert.alert({
          title: "Error during sign in",
          message: error.reason,
          type: 'danger',
          style: 'growl-bottom-left',
        })
      }else{
        if(onSignIn){
          onSignIn()
        }
      }
    })
  }

  render(){
    const {username, password} = this.state

    return(
      <Form onSubmit={this.connect.bind(this)}>
        <Form.Group>
          <Form.Field width={8}>
            <label>Username</label>
            <Input value={username} type="text" onChange={(e) => {this.handleChange('username', e)}} />
          </Form.Field>
          <Form.Field width={8}>
            <label>Password</label>
            <Input value={password} type="password" onChange={(e) => {this.handleChange('password', e)}} />
          </Form.Field>
        </Form.Group>
        <Button color="blue">Sign in</Button>
        <Link to='/sign_up'>
          <Button>Register</Button>
        </Link>
      </Form>
    )
  }
}
