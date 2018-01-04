//container component to hold state for the remove, pending and member renewal.
//pulls state for all member status.
//allows for filtering of club_id and membership_status
import React, {Component} from 'react';

import {RemovedMembers} from './RemovedMembers'
import { connect } from 'react-redux'
// import {memberFormData} from '../reducers/memberFormData'


import {PendingMembers} from './PendingMembers'
import store from '../store.js'
import {MemberRenewal} from './MemberRenewal'
// import membersreducer from '../reducers/membersreducer'
import {bindActionCreators} from 'redux'
import {MembershipManagement} from './MembershipManagement'
import {updatependingmember} from '../actions/membership'
import {updaterenewalstatus} from '../actions/membership'
import {updatePendingStatus} from '../actions/membership'


class MemberListContainer extends Component {

  handleClick = () => {

  }
  approvePendingMemberOnClick = (membershipStatusId, id) => {
    store.dispatch(updatePendingStatus(membershipStatusId, id));

  }


  renewOnClick = (membershipStatusId, id) => {

    store.dispatch(updaterenewalstatus(membershipStatusId, id))
  }
  removeOnClick = () => {
    
  }



  render() {
    const filteredMembers = (members, filter) => {
    if(filter === "pending") {
      return members.filter((m)=> m.membership_status.is_member === filter);
    } else if(filter === "current") {
      return members.filter((m) => m.membership_status.is_member === filter)
    } else if(filter === "removed") {
      return members.filter((m)=> m.membership_status.is_member === filter)
    }


    }
    const WhichToRender = () => {


      if(window.location.href === "http://localhost:3000/membershipmanagement/removedmembers") {

        return(

          <RemovedMembers
            members={filteredMembers(this.props.members, "removed")}
            memberFormData={this.props.memberFormData}
            onClick={this.handleClick}
            handleOnChange={this.handleOnChange}
             />

        )
      } else if (window.location.href === "http://localhost:3000/membershipmanagement/memberrenewal") {
        return(
          <MemberRenewal
          members={filteredMembers(this.props.members, "current")}
          memberFormData={this.props.memberFormData}

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
      }else {
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
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberListContainer)
