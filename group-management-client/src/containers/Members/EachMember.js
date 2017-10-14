import React from 'react';
import { Button} from 'react-bootstrap'

const EachMember = (props) => (
<tbody>
  <tr>


    <td>{props.member.membership_status.member_number}</td>
    <td>{props.member.username}</td>
    <td>{props.member.user_info.first_name}</td>
    <td>{props.member.user_info.last_name}</td>
    <td>{props.member.membership_status.is_member}</td>
    <td>
    <Button bsStyle="success">Renew</Button>
    <Button bsStyle="danger">Remove</Button>
    </td>

    </tr>
  </tbody>
)

export default EachMember
