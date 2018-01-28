//shows demographics for all members.

import React, {Component} from 'react';
import {MemberCount} from './MemberCount'
import {PendingMemberCount} from './PendingMemberCount'
import { Grid, Row, Col} from 'react-bootstrap'
import GetClubs from './GetClubs'
import { connect } from 'react-redux'
import store from '../store.js'
import {bindActionCreators} from 'redux'
class MembershipManagement extends Component {
    componentDidMount() {

    }
    render() {

      const pendingmembercount = this.props.members.filter((m) => m.membership_status.is_member === "pending").length
      const membercount = this.props.members.length
    return(
      <div>
        <Grid className="membershipmanagement">
          <Row>

            <Col sm={8} md={12} className="dashboardheader">
              <h1>Membership Dashboard</h1>
              <GetClubs />
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
}

const mapStateToProps = (state) => {
  return({
    members: state.members,
    memberFormData: state.memberFormData,
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MembershipManagement)
