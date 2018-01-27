//shows a list of potential members. They need to be approved to have full access.
import React, {Component} from 'react';
import { Grid, Table, Button} from 'react-bootstrap';
import GetClubs from './GetClubs'
import { connect } from 'react-redux'
import store from '../store.js'
import {bindActionCreators} from 'redux'
// import updatependingmember from '../actions/membership'
import {updatePendingStatus} from '../actions/membership'

class PendingMembers extends Component {
  approvePendingMemberOnClick = (membershipStatusId, id) => {
    store.dispatch(updatePendingStatus(membershipStatusId, id));

  }


  render() {
    const memberList = this.props.members.map((m) => {
      if(m.membership_status.is_member === "pending") {

        return (
          <tbody key={m.id}>

          <tr>
          <td>{m.first_name}</td>
          <td>{m.last_name}</td>
          <td><Button onClick={() => this.approvePendingMemberOnClick(m.membership_status.id, m.id)}>Approve</Button></td>
          </tr>

          </tbody>
        )
      }
    })

    return(
      <div>
        <Grid>
          <h1 className="pendingmembersheader">Pending Members</h1>
          <GetClubs />
          <Table className="pendinggrid">
            <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>

              <th></th>
            </tr>
            </thead>


              {memberList}


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
      updatePendingStatus: updatePendingStatus,
      // updatependingmember: updatependingmember,
    }, dispatch)
  }
  export default connect(mapStateToProps, mapDispatchToProps)(PendingMembers)
