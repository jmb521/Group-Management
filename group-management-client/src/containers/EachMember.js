import React, {Component} from 'react';
import { Button} from 'react-bootstrap'
import { removeMember } from '../actions/membership'
import { connect } from 'react-redux'
class EachMember extends Component {
  constructor() {
    super()

  }

  RenewOnClick = () => {

  }
  RemoveOnClick = (member) => {
    console.log(member)
    // this.props.removeMember()
  }

  render() {
    return(
      <tbody>
      <tr>
      <td>{this.props.member.membership_status.member_number}</td>

      <td>{this.props.member.first_name}</td>
      <td>{this.props.member.last_name}</td>
      <td>{this.props.member.membership_status.is_member + " "}</td>
      <td>
      <Button bsStyle="success" onClick={this.RenewOnClick}>Renew</Button>
      <Button bsStyle="danger" id={this.props.key} onClick={this.RemoveOnClick(this.props.key)}>Remove</Button>
      </td>

      </tr>
      </tbody>




    )
  }
}
const mapStateToProps = (state) => {
  return({
    members: state.members
  })
}
export default connect(mapStateToProps, { removeMember })(EachMember);
