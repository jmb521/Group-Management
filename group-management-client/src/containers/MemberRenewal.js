//this is for setting all members to a "holding" position so that the membership person can process all members and see which ones still need to be changed.
import React, {Component} from 'react';
import {Grid, Table, Button} from 'react-bootstrap'
import GetClubs from './GetClubs'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {updaterenewalstatus} from '../actions/membership'
import store from '../store.js'
import {updateremovalstatus} from '../actions/membership'
import {resetmembership} from '../actions/membership'
class MemberRenewal extends Component {

  renewOnClick = (membershipStatusId, id) => {

    store.dispatch(updaterenewalstatus(membershipStatusId, id))
  }
  removeOnClick = (membershipStatusId, id) => {
    store.dispatch(updateremovalstatus(membershipStatusId, id))
  }
  resetMembership = (club_id) => {
    this.props.members.map((m) => {
      if(m.club_id === club_id && m.membership_status.is_member === "current") {
        return (

          store.dispatch(resetmembership(m.id))
        )
      }
    })
  }
  render() {
    const memberList = this.props.members.map((m) => {
      if(m.membership_status.is_member === "current") {

        if(m.membership_status.membership_paid !== "true") {
          return (

            <tr key={m.id}>
            <td>{m.first_name}</td>
            <td>{m.last_name}</td>
            <td>{m.user_contact_info.email}</td>
            <td>{m.membership_status.is_member}</td>
            <td>{m.membership_status.updated_at}</td>
            <td>{m.membership_status.membership_paid}</td>
            <td><Button onClick={() => {this.renewOnClick(m.membership_status.id, m.id)}}>Renew</Button> &nbsp; <Button onClick={()=>{this.removeOnClick(m.membership_status.id, m.id)}}>Remove</Button></td>
            </tr>

          )
        }
      }


    })

    return (
      <div className="memberrenewal">
        <Grid>
          <h1>Membership Renewal</h1>
          <h5> This is only for current members</h5>
          <br />
          <p> Resetting membership will change the paid status to false so you can start processing the new membership <Button onClick={()=> {this.resetMembership(this.props.memberFormData.club_id)}}>Reset</Button></p>

          <GetClubs />
          <br />
          <Table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Membership Status</th>
                <th>Last Updated</th>
                <th>Is Membership Paid?</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {memberList}
              </tbody>

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
    updaterenewalstatus: updaterenewalstatus,
    updateremovalstatus: updateremovalstatus,
    resetmembership: resetmembership,
    }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(MemberRenewal)
