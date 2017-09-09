import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';




class Navigation extends React.Component{
  render() {
    return(

      <Navbar inverse>
      <Navbar.Header>
      <Navbar.Brand>
      <a href="/home">Group Management</a>
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
      <NavItem eventKey={1} href="/membership">Membership</NavItem>
      <NavItem eventKey={2} href="/events">Events</NavItem>

      </Nav>
      <Nav pullRight>

      </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Navigation;
