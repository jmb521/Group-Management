//shows demographics for all members.

import React, { Component } from 'react';
import {MemberCount} from './MemberCount'
import {PendingMemberCount} from './PendingMemberCount'
// import {bindActionCreators} from 'redux'
// import EachMember from './EachMember'
import { connect } from 'react-redux'
import { Grid, Row, Col} from 'react-bootstrap'
// import { getMembers } from '../actions/membership'
// import { bindActionCreators } from 'redux'
import membershipdashboardreducer from '../reducers/membershipdashboardreducer'
import membersreducer from '../reducers/membersreducer'
// import { updateMemberStatus } from '../actions/membership'
// import {removeMember } from '../actions/membership'
import {GetClubs} from './GetClubs'
import store from '../store.js'
export const MembershipManagement = function(props) {



    const pendingmembercount = props.members.filter((m) => m.membership_status.is_member === "pending").length
    const membercount = props.members.length
    return(
      <div>
        <Grid className="membershipmanagement">
          <Row>
            <Col sm={6} md={12} className="dashboardheader">
              <h1>Membership Dashboard</h1>
              <GetClubs clubs={props.clubs} handleOnChange={props.handleOnChange}/>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={3} className="member_count">
              <MemberCount memberCount={membercount} />
            </Col>
            <Col sm={6} md={3} className="pending_member_count">
              <PendingMemberCount pendingMemberCount={pendingmembercount} />
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
