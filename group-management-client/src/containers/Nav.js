import React, {PropTypes} from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as sessionActions from '../actions/sessionActions'

class Navigation extends React.Component{
  constructor(props) {
    super();

  }
  logOut = (event) => {
    event.preventDefault();
    this.props.actions.logOutUser();
  }



  render() {
    if (this.props.logged_in) {
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
          <Link to="/logout" onClick={this.logOut}>log out</Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      )
    } else {
      return (
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
        </Nav>
        <Nav pullRight>

        <Link to="/login">  Login </Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      )
    }

  }
}

// Navigation.propTypes = {
//   actions: PropTypes.object.isRequired
// }
function mapStateToProps(state, ownProps) {
  return {
    logged_in: state.session
  }
}
export default connect(mapStateToProps)(Navigation)
