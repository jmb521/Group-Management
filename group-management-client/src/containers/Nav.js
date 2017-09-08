import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Navigation extends React.Component{
  render() {
    return(

      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
      <Navbar.Brand>
      <a href="/home">Group Management</a>
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
      <Link to="/membership">
      <NavItem eventKey={1} to="/membership">Membership
      { /* <Link to="/membership">Membership</Link> */}
      </NavItem>
      </Link>
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
