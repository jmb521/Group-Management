//shows demographics for all members.

import React, { Component } from 'react';
import EachMember from './EachMember'
import { connect } from 'react-redux'
import { Grid, Table} from 'react-bootstrap'
import { getMembers } from '../actions/membership'
import { bindActionCreators } from 'redux'
import { membership } from '../reducers/MembershipReducer'
import { updateMemberStatus } from '../actions/membership'
import {removeMember } from '../actions/membership'
class Membership extends Component {

  componentDidMount() {
    this.props.getMembers()
    // this.currentMember()
  }
  handleDeactiveMember = (memberId) => {
    console.log(memberId + ' was deactivated')
  }



  render() {
    const currentMember = () => {
      let eachMember = ""
      debugger;
      if(this.props.members.length > 0){

        this.props.members.map((member) => {
          if(member.membership_status.is_member !== "not a member") {
            eachMember = <EachMember member={member} key={member.id} onDeactivate={this.handleDeactivateMember} />
          }
        })
      } else {
        eachMember = "No members to display"
      }

      return eachMember
    }


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


    {currentMember}

      </Table>
      </Grid>
    )
  }
}

// const mapStateToProps = ({membership: membership}) => {
//   return({
//     membership: membership
//   })
// }

// const mapDispatchToProps = (dispatch) => {
//   return {updateMemberStatus: bindActionCreators(updateMemberStatus, dispatch)}
// }

// I think this one is wrong
const mapStateToProps = (state) => {
  return({
    members: state.members,

  })
}
//
const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    removeMember: removeMember
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps, { getMembers })(Membership);
