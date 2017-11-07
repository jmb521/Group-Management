import React, { Component } from 'react';
import EachMember from './EachMember'
import { connect } from 'react-redux'
import { Grid, Table} from 'react-bootstrap'
import { getMembers } from '../actions/membership'

class Membership extends Component {
  componentDidMount() {
    this.props.getMembers()

  }

  render() {
    console.log("props in membership", this.props.members)


    return(
      <Grid>
      <h3 className="member_list_header">Member List</h3>
      <Table striped bordered condensed hover className="memberlist">
      <thead>
      <tr>
      <th>Member #</th>
      
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
const mapStateToProps = (state) => {
  return({
    members: state.members
  })
}
export default connect(mapStateToProps, { getMembers })(Membership);
