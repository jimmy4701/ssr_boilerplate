import React, {Component} from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { createContainer } from 'meteor/react-meteor-data'
import {Form, Input, Button} from 'semantic-ui-react'
import {Redirect, withRouter} from 'react-router-dom'

export class SignUpForm extends TrackerReact(Component){

  /*
    required props:
      - none
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

  signup(e){
    e.preventDefault()
    const {email, password} = this.state
    Meteor.call('accounts.signup', this.state , (error, result) => {
      if(error){
        console.log(error)
        Bert.alert({
          title: "Error during sign up",
          message: error.reason,
          type: 'danger',
          style: 'growl-bottom-left',
        })
      }else{
        Bert.alert({
          title: "Your account has been created successfuly",
          message: "success",
          type: 'success',
          style: 'growl-bottom-left',
        })
        Meteor.loginWithPassword(email, password, () => {
          this.props.history.push("/")
        })
      }
    })
  }

  render(){
    const {firstname, lastname, email, password, password_confirmation} = this.state
    return(
      <Form onSubmit={(e) => {this.signup(e)}}>
        <Form.Group>
          <Form.Field width={8}>
            <label>Firstname</label>
            <Input value={firstname} type="text" onChange={(e) => {this.handleChange('firstname', e)}} />
          </Form.Field>
          <Form.Field width={8}>
            <label>Lastname</label>
            <Input value={lastname} type="text" onChange={(e) => {this.handleChange('lastname', e)}} />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field width={16}>
            <label>Email</label>
            <Input value={email} type="email" onChange={(e) => {this.handleChange('email', e)}} />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field width={8}>
            <label>Password</label>
            <Input value={password} type="password" onChange={(e) => {this.handleChange('password', e)}} />
          </Form.Field>
          <Form.Field width={8}>
            <label>Password confirmation</label>
            <Input value={password_confirmation} type="password" onChange={(e) => {this.handleChange('password_confirmation', e)}} />
            {password && password != password_confirmation ?
              <label>Password and confirmation are not the same</label>
            : ''}
          </Form.Field>
        </Form.Group>
        <Button color="green">Sign Up</Button>
      </Form>
    )
  }
}

export default withRouter(SignUpForm)
