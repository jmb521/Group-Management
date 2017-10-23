import React, {Component} from 'react';
import { Button} from 'react-bootstrap'

class EachMember extends Component {
  constructor() {
    super()

  }

  RenewOnClick = () => {
    // this.props.store.dispatch({
    //   type:
    // })
  }
  RemoveOnClick = () => {
    this.props.removeMember()
  }

  render() {
    return(
      <tbody>
      <tr>
      <td>{this.props.member.membership_status.member_number}</td>
      <td>{this.props.member.username}</td>
      <td>{this.props.member.user_info.first_name}</td>
      <td>{this.props.member.user_info.last_name}</td>
      <td>{this.props.member.membership_status.is_member + " "}</td>
      <td>
      <Button bsStyle="success" onClick={this.RenewOnClick}>Renew</Button>
      <Button bsStyle="danger" onClick={this.RemoveOnClick}>Remove</Button>
      </td>

      </tr>
      </tbody>




    )
  }
}




export default EachMember
