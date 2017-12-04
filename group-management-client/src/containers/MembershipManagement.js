//shows demographics for all members.

import React, { Component } from 'react';
import {MemberCount} from './MemberCount'
import {PendingMemberCount} from './PendingMemberCount'
// import EachMember from './EachMember'
// import { connect } from 'react-redux'
import { Grid, Row, Col} from 'react-bootstrap'
// import { getMembers } from '../actions/membership'
// import { bindActionCreators } from 'redux'
// import { membership } from '../reducers/MembershipReducer'
// import { updateMemberStatus } from '../actions/membership'
// import {removeMember } from '../actions/membership'
class MembershipManagement extends Component {
  state = {
    memberCount: "1,543",
    pendingMemberCount: 42,
    
  }


  render() {
    return(
      <div>
        <Grid className="membershipmanagement">
          <Row>
            <Col sm={6} md={12} className="dashboardheader">
              <h1>Membership Dashboard</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={3} className="member_count">
              <MemberCount memberCount={this.state.memberCount} />
            </Col>
            <Col sm={6} md={3} className="pending_member_count">
              <PendingMemberCount pendingMemberCount={this.state.pendingMemberCount} />
            </Col>
            <Col sm={6} md={3}>

            </Col>
            <Col sm={6} md={3}>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default MembershipManagement
