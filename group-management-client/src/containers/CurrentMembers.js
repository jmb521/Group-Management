import React from 'react'
import {Grid, Table, Button} from 'react-bootstrap'
import GetClubs from './GetClubs'
import MemberList from './MemberList'


export const CurrentMembers = function(props) {
  const List = props.members.map((m) => {
    return(

      <MemberList key={m.id} member={m} />
    )
  })

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
            <th></th>
            <th>Vote</th>
            <th>Votes Received</th>
          </tr>
        </thead>
        {List}

      </Table>
    </Grid>
  </div>
)
}
