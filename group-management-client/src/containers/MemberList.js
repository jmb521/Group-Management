import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import {updateVote} from '../actions/votes'
import {bindActionCreators} from 'redux'
import store from '../store.js'
import { connect } from 'react-redux'

class MemberList extends Component {

  //
  voteCount = (id) => {

    const updated = this.props.member.vote.number_of_votes + 1
    this.props.updateVote(id, updated)
  }

  render() {

    return(
      <tbody key={this.props.member.id}>
      <tr>
      <td>{this.props.member.first_name}</td>
      <td>{this.props.member.last_name}</td>
      <td>{this.props.member.user_contact_info.email}</td>
      <td>{this.props.member.membership_status.is_member}</td>
      <td><Button onClick={()=>{this.props.removeOnClick(this.props.member.membership_status.id, this.props.member.id)}}>Remove</Button></td>
      <td><Button onClick={()=>{this.voteCount(this.props.member.id)}}>Vote</Button></td>
      <td>{this.props.member.vote.number_of_votes}</td>

      </tr>
      </tbody>

    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateVote: updateVote,

  }, dispatch)
}
export default connect(undefined, mapDispatchToProps)(MemberList)
