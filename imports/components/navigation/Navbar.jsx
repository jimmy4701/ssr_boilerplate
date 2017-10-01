import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import {Menu, Dropdown, DropdownMenu, DropdownItem} from 'semantic-ui-react'

export class Navbar extends Component{

  /*
    required props:
  */

  constructor(props){
    super(props);
    this.state = {
    }
  }

  logout(e){
    e.preventDefault()
    Meteor.logout()
  }

  render(){
    const links = [
      {path: "/", label: "Accueil"}
    ]
    const right_links = [
      {path: "/sign_up", label: "Inscription"},
      {path: "/sign_in", label: "Connexion"}
    ]

    const {authenticated} = this.props
    return(
      <Menu borderless={true} size="huge">
        {links.map((link, index) => {
          return (
            <Link key={index} to={link.path}>
              <Menu.Item name={link.label} />
            </Link>
          )
        })}
        {authenticated ?
          <Menu.Menu position='right'>
            <Menu.Item className="pointer" onClick={(e) => {this.logout(e)}}>Logout</Menu.Item>
          </Menu.Menu>
        :
          <Menu.Menu position='right'>
            <Link to='/sign_up'>
              <Menu.Item className="pointer">Register</Menu.Item>
            </Link>
            <Link to='/sign_in'>
              <Menu.Item className="pointer">Login</Menu.Item>
            </Link>

          </Menu.Menu>
        }

      </Menu>
    )
  }
}

export default NavbarContainer = createContainer(({}) => {
  return {}
}, Navbar)
