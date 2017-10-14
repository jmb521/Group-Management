import React from 'react';

const EachMember = (props) => (


    <tr>
    <td>{props.member.user_info.member_number}
    <td>{props.member.username}</td>
    <td>{props.member.user_info.first_name}</td>
    <td>{props.member.user_info.last_name}</td>
    <td>{props.member.membership_status.is_member}</td>
    </tr>



)

export default EachMember
