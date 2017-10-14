import React, { Component } from 'react';
import EachMember from './EachMember'

import { Grid, Table} from 'react-bootstrap'


class Membership extends Component {


  render() {
    console.log("props in membership", this.props.members)


    return(
      <Grid>
      <h3 className="member_list_header">Member List</h3>
      <Table striped bordered condensed hover>
      <thead>
      <tr>
      <th>Member #</th>
      <th>Username</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Current Member</th>
      <th>Change Status</th>
      </tr>
      </thead>

          {this.props.members.map((member, index) => <EachMember member={member} key={index} />)}


      </Table>
      </Grid>
    )
  }
}

export default Membership
