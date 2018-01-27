//container component to hold state for the remove, pending and member renewal.
import React, {Component} from 'react';
import {RemovedMembers} from './RemovedMembers'
import { connect } from 'react-redux'


import store from '../store.js'

import {bindActionCreators} from 'redux'

import {updatereinstatestatus} from '../actions/membership'


class MemberListContainer extends Component {


  reinstateOnClick = (membershipStatusId, id) => {
    store.dispatch(updatereinstatestatus(membershipStatusId, id))
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



    updatereinstatestatus: updatereinstatestatus,

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberListContainer)
