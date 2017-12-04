//this is for setting all members to a "holding" position so that the membership person can process all members and see which ones still need to be changed.
import React, {Component} from 'react';
import {Grid} from 'react-bootstrap'

class MemberRenewal extends Component {
  state = {

  }
  render() {
    return (
      <div className="memberrenewal">
        <Grid>
          <h1>Membership Renewal</h1>
          <h5> This is only for current members</h5>
        </Grid>
      </div>
    )
  }
}
export default MemberRenewal
