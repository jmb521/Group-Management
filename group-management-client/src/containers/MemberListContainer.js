//container component to hold state for the remove, pending and member renewal.
//pulls state for all member status.
//allows for filtering of club_id and membership_status
import React, {Component} from 'react';

import {RemovedMembers} from './RemovedMembers'
import { connect } from 'react-redux'
// import {memberFormData} from '../reducers/memberFormData'

import {CurrentMembers} from './CurrentMembers'
import {PendingMembers} from './PendingMembers'
import store from '../store.js'
import {MemberRenewal} from './MemberRenewal'
// import membersreducer from '../reducers/membersreducer'
import {bindActionCreators} from 'redux'
import {MembershipManagement} from './MembershipManagement'
import {updatependingmember} from '../actions/membership'
import {updaterenewalstatus} from '../actions/membership'
import {updatePendingStatus} from '../actions/membership'
import {updateremovalstatus} from '../actions/membership'
import {updatereinstatestatus} from '../actions/membership'
import {resetmembership} from '../actions/membership'


class MemberListContainer extends Component {

  reinstateOnClick = (membershipStatusId, id) => {
    store.dispatch(updatereinstatestatus(membershipStatusId, id))
  }
  approvePendingMemberOnClick = (membershipStatusId, id) => {
    store.dispatch(updatePendingStatus(membershipStatusId, id));

  }


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
    const filteredMembers = (members, filter, alternate_filter) => {
    if(filter === "pending") {
      return members.filter((m)=> m.membership_status.is_member === filter);
    } else if(filter === "current") {
      return members.filter((m) => m.membership_status.is_member === filter)
    } else if(filter === "removed") {
      return members.filter((m)=> m.membership_status.is_member === filter)
    } else if(filter !== "removed" || filter !== "pending") {
      return members.filter((m) => m.membership_status.is_member !== "removed" && m.membership_status.is_member !== "pending")
    }


    }
    const WhichToRender = () => {


      if(window.location.href === "http://localhost:3000/membershipmanagement/removedmembers") {

        return(

          <RemovedMembers
            members={filteredMembers(this.props.members, "removed")}
            memberFormData={this.props.memberFormData}
            reinstateOnClick={this.reinstateOnClick}
            handleOnChange={this.handleOnChange}

             />

        )
      } else if (window.location.href === "http://localhost:3000/membershipmanagement/memberrenewal") {
        return(
          <MemberRenewal
          members={filteredMembers(this.props.members, "current")}
          memberFormData={this.props.memberFormData}
          resetMembership={this.resetMembership}
          renewOnClick={this.renewOnClick}
          removeOnClick={this.removeOnClick}
          handleOnChange={this.handleOnChange}

          />
        )
      } else if (window.location.href === "http://localhost:3000/membershipmanagement/pendingmembers") {
        return(
          <PendingMembers
          members={filteredMembers(this.props.members, "pending")}

          approvePendingMemberOnClick={this.approvePendingMemberOnClick}
          handleOnChange={this.handleOnChange}
          />

        )
      } else if(window.location.href === "http://localhost:3000/membershipmanagement") {
        return(
        <MembershipManagement
        members={this.props.members}

        handleOnChange={this.handleOnChange}
        />
      )
    } else if(window.location.href === "http://localhost:3000/membershipmanagement/currentmembers") {
      return(
        <CurrentMembers
        members={filteredMembers(this.props.members, "renewed, current")}
        handleOnChange={this.handleOnChange}
        removeOnClick={this.removeOnClick}
        />
      )
    } else {
        return(
          <div>
          </div>
        )
      }

    }

    return(
      <div>
        <WhichToRender />

      </div>
    )
  }
}

 const mapStateToProps = (state) => {
  return({

    memberFormData: state.memberFormData,
    members: state.members,
    
  })
}

const mapDispatchToProps = (dispatch)  => {
  return bindActionCreators({
    // updateMemberFormData: updateMemberFormData,
    updatePendingStatus: updatePendingStatus,
    updatependingmember: updatependingmember,
    updaterenewastatus: updaterenewalstatus,
    updateremovalstatus: updateremovalstatus,
    updatereinstatestatus: updatereinstatestatus,
    resetmembership: resetmembership,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberListContainer)
