import React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
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
      <NavDropdown eventKey={3} title="Membership" id="basic-nav-dropdown">

          <MenuItem eventKey={3.1} href="/membership">Membership</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.2} href="/addmember">Add Member</MenuItem>
        </NavDropdown>
        

      </Nav>
      <Nav pullRight>

      </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Navigation;
