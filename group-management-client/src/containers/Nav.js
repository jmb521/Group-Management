import React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';





class Navigation extends React.Component{
  render() {
    return(

      <Navbar inverse>
      <Navbar.Header>
      <Navbar.Brand>
      <a href="/">Group Management</a>
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
      <NavDropdown eventKey={2} title="Club" id="basic-nav-dropdown">
        <MenuItem eventKey={2.1} href="/addclub">Add Club</MenuItem>
        </NavDropdown>
        <NavItem eventKey={3} href="/addmember">Add Member</NavItem>
      <NavDropdown eventKey={4} title="Membership Management" id="basic-nav-dropdown">

          <MenuItem eventKey={4.1} href="/membershipmanagement">Membership</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={4.2} href="/membershipmanagement/pendingmembers">Pending Members</MenuItem>
          <MenuItem eventKey={4.3} href='/membershipmanagement/memberrenewal'>Member Renewal</MenuItem>
          <MenuItem eventKey={4.4} href="/membershipmanagement/removedmembers">Removed Members</MenuItem>
          <MenuItem eventKey={4.5} href="/membershipmanagement/currentmembers">Current Members</MenuItem>

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
