import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';



class NavFooter extends React.Component {

  render() {
    return(
      <div>
      <Navbar inverse collapseOnSelect fixedBottom>
  <Navbar.Header>

    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
    </Nav>

  </Navbar.Collapse>
</Navbar>
</div>
    )
  }
}

export default NavFooter
