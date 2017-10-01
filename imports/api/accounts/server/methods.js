import {Meteor} from 'meteor/meteor'

Meteor.methods({
  'accounts.signup'(account_data){
    const user = Accounts.createUser({
      email: account_data.email,
      username: account_data.firstname + ' ' + account_data.lastname,
      password: account_data.password,
      profile: {
        firstname: account_data.firstname,
        lastname: account_data.lastname
      }
     })
    console.log("SERVER: Signup request for email " + account_data.email)
    return user

  }
})
