import React, { Component } from 'react';
import EachMember from './EachMember'
import './membership.css'
import { Grid, Table, striped, bordered, condensed, hover} from 'react-bootstrap'


class Membership extends Component {


  render() {
    console.log("props in membership", this.props.members)


    return(
      <Grid>
      <Table striped bordered condensed hover>
      <th>Member #</th>
      <th>Username</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Current Member</th>
      <tbody>
      {this.props.members.map((member, index) => <EachMember member={member} key={index} />)}
      </tbody>
      </Table>
      </Grid>
    )
  }
}

export default Membership
