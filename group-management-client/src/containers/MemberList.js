import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
class MemberList extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
    }
  }

  voteCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
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
      <td><Button onClick={this.voteCount}>Vote</Button></td>
      <td>{this.state.count}</td>

      </tr>
      </tbody>

    )
  }

}
export default MemberList
