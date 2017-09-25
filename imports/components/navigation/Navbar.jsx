import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import {Menu, Dropdown, DropdownMenu, DropdownItem} from 'semantic-ui-react'

export default class Navbar extends Component{

  /*
    required props:
  */

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    const links = [
      {path: "/", label: "Accueil"}
    ]
    const right_links = [
      {path: "/sign_up", label: "Inscription"},
      {path: "/sign_in", label: "Connexion"}
    ]

    const {loggedIn} = this.props
    return(
      <Menu borderless={true} size="huge">
        {links.map((link, index) => {
          return (
            <Link key={index} to={link.path}>
              <Menu.Item name={link.label} />
            </Link>
          )
        })}
        {loggedIn ?
          <Dropdown item className="right">
            <DropdownMenu>
              {right_links.map((link, index) => {
                return (
                  <Link key={index} to={link.path}>
                    <DropdownItem>{link.label}</DropdownItem>
                  </Link>
                )
              })}
            </DropdownMenu>
          </Dropdown>
        :
          <Menu.Menu position='right'>
            {right_links.map((link, index) => {
              return (
                <Link key={index} to={link.path}>
                  <Menu.Item>{link.label}</Menu.Item>
                </Link>
              )
            })}
          </Menu.Menu>
        }

      </Menu>
    )
  }
}
