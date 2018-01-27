//container component to hold state for the remove, pending and member renewal.
import React, {Component} from 'react';
import {RemovedMembers} from './RemovedMembers'
import { connect } from 'react-redux'

import {PendingMembers} from './PendingMembers'
import store from '../store.js'

import {bindActionCreators} from 'redux'

import {updatependingmember} from '../actions/membership'

import {updatePendingStatus} from '../actions/membership'

import {updatereinstatestatus} from '../actions/membership'


class MemberListContainer extends Component {


  reinstateOnClick = (membershipStatusId, id) => {
    store.dispatch(updatereinstatestatus(membershipStatusId, id))
  }
  approvePendingMemberOnClick = (membershipStatusId, id) => {
    store.dispatch(updatePendingStatus(membershipStatusId, id));

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
      }

      else if (window.location.href === "http://localhost:3000/membershipmanagement/pendingmembers") {
        return(
          <PendingMembers
          members={filteredMembers(this.props.members, "pending")}

          approvePendingMemberOnClick={this.approvePendingMemberOnClick}
          handleOnChange={this.handleOnChange}
          />

        )
    }
     else {
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


    updatereinstatestatus: updatereinstatestatus,

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberListContainer)
