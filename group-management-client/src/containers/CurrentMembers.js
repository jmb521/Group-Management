import React from 'react'
import {Grid, Table, Button} from 'react-bootstrap'
import GetClubs from './GetClubs'



export const CurrentMembers = function(props) {

  const memberList = props.members.map((m) => {
  return (
    <tbody key={m.id}>
    <tr>
      <td>{m.first_name}</td>
      <td>{m.last_name}</td>
      <td>{m.user_contact_info.email}</td>
      <td>{m.membership_status.is_member}</td>
      <td><Button onClick={()=>{props.removeOnClick(m.membership_status.id, m.id)}}>Remove</Button></td>

    </tr>
    </tbody>
  )

  });


return (
  <div className="currentmembers">
    <Grid>
      <h1>Current Members</h1>
      <br />
      <GetClubs />
      <br />
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Membership Status</th>

          </tr>
        </thead>

          {memberList}


      </Table>
    </Grid>
  </div>
)
}
