import React, {Component} from 'react'
import {Grid, Table, Button} from 'react-bootstrap'
import GetClubs from './GetClubs'
import MemberList from './MemberList'
import { connect } from 'react-redux'
import store from '../store.js'
import {bindActionCreators} from 'redux'
import {updateremovalstatus} from '../actions/membership'
class CurrentMembers extends Component {
  removeOnClick = (membershipStatusId, id) => {
    store.dispatch(updateremovalstatus(membershipStatusId, id))
  }
  render() {
  const List = this.props.members.map((m) => {
    console.log('mmmm', m)
    if(m.membership_status.is_member === "current") {
      return(

        <MemberList key={m.id} member={m} removeOnClick={this.removeOnClick} />
      )

    }
  })

return (
  <div className="currentmembers">
    <Grid>
      <h1>Current Members</h1>
      <br />
      <GetClubs />
      <br />
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Membership Status</th>
            <th></th>
            <th>Vote</th>
            <th>Votes Received</th>
          </tr>
        </thead>
        {List}

      </Table>
    </Grid>
  </div>
  )
  }
}

const mapStateToProps = (state) => {
  return({
    members: state.members,
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateremovalstatus: updateremovalstatus,
  }, dispatch)
}
export default connect(mapStateToProps)(CurrentMembers)
