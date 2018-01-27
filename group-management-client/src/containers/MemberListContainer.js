//container component to hold state for the remove, pending and member renewal.
import React, {Component} from 'react';

import { connect } from 'react-redux'


import store from '../store.js'

import {bindActionCreators} from 'redux'

import {updatereinstatestatus} from '../actions/membership'


class MemberListContainer extends Component {










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


    return(
      <div>


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
