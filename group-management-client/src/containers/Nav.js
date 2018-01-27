import React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

class Navigation extends React.Component{
  render() {
    return(

      <Navbar inverse>
      <Navbar.Header>
      <Navbar.Brand>
      <Link
        to="/"
        className="home_link">Group Management</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
      <NavDropdown eventKey={2} title="Club" id="basic-nav-dropdown">
        <LinkContainer to="/addclub"><MenuItem eventKey={2.1} >Add Club</MenuItem></LinkContainer>
        </NavDropdown>
        <LinkContainer to="/addmember"><NavItem eventKey={3}>Add Member</NavItem></LinkContainer>
      <NavDropdown eventKey={4} title="Membership Management" id="basic-nav-dropdown">

          <LinkContainer to="/membershipmanagement"><MenuItem eventKey={4.1}>Membership Dashboard</MenuItem></LinkContainer>
          <MenuItem divider />
          <LinkContainer to="/membershipmanagement/pendingmembers"><MenuItem eventKey={4.2}>Pending Members</MenuItem></LinkContainer>
          <LinkContainer to='/membershipmanagement/memberrenewal'><MenuItem eventKey={4.3}>Member Renewal</MenuItem></LinkContainer>
          <LinkContainer to="/membershipmanagement/removedmembers"><MenuItem eventKey={4.4}>Removed Members</MenuItem></LinkContainer>
          <LinkContainer to="/membershipmanagement/currentmembers"><MenuItem eventKey={4.5}>Current Members</MenuItem></LinkContainer>

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
