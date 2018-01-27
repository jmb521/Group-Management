// //shows a list of former members
import React, {Component} from 'react';
import GetClubs from './GetClubs'
import { Grid, Table, Button} from 'react-bootstrap';
import { connect } from 'react-redux'
import store from '../store.js'
import {bindActionCreators} from 'redux'
import {updatereinstatestatus} from '../actions/membership'

class RemovedMembers extends Component {

  reinstateOnClick = (membershipStatusId, id) => {
    store.dispatch(updatereinstatestatus(membershipStatusId, id))
  }

  render() {
    const memberList = this.props.members.map((m) => {

      if(m.membership_status.is_member === "removed") {
         if(parseInt(m.club_id, 10) === parseInt(this.props.memberFormData.club_id, 10)) {
           return (

             <tbody key={m.id}>
             <tr>
             <td>{m.first_name}</td>
             <td>{m.last_name}</td>
             <td>{m.user_contact_info.email}</td>
             <td><Button onClick={()=>{this.reinstateOnClick(m.membership_status.id, m.id)}}>Reinstate</Button></td>
             </tr>
             </tbody>
           )
         }
        }
       })



  return(
    <div>
      <Grid>
        <h1>Former Member List</h1>
          <GetClubs />
          <Table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last name</th>
                <th>Email</th>
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
    memberFormData: state.memberFormData,
  })
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updatereinstatestatus: updatereinstatestatus,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RemovedMembers)
