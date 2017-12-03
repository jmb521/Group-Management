//shows demographics for all members.

import React, { Component } from 'react';
import {MemberCount} from './MemberCount'
// import EachMember from './EachMember'
// import { connect } from 'react-redux'
// import { Grid, Table} from 'react-bootstrap'
// import { getMembers } from '../actions/membership'
// import { bindActionCreators } from 'redux'
// import { membership } from '../reducers/MembershipReducer'
// import { updateMemberStatus } from '../actions/membership'
// import {removeMember } from '../actions/membership'
class MembershipManagement extends Component {
  state = {

  }

  //shows the current member count
  render() {
    return(
      <div>
        <div className="member_count">
          <MemberCount />
        </div>
      </div>
    )
  }
}

export default MembershipManagement
