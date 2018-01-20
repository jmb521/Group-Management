//shows a list of potential members. They need to be approved to have full access.
import React from 'react';
import { Grid, Table, Button} from 'react-bootstrap';
import GetClubs from './GetClubs'



export const PendingMembers = function(props) {

    const memberList = props.members.map((m) => {

      return (
        <tbody key={m.id}>

        <tr>
            <td>{m.first_name}</td>
            <td>{m.last_name}</td>

            <td><Button onClick={() => props.approvePendingMemberOnClick(m.membership_status.id, m.id)}>Approve</Button></td>
        </tr>

        </tbody>
      )
    })
    return(
      <div>
        <Grid>
          <h1 className="pendingmembersheader">Pending Members</h1>
          <GetClubs />
          <Table className="pendinggrid">
            <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            
              <th></th>
            </tr>
            </thead>


              {memberList}


          </Table>
        </Grid>
      </div>
    )
  }
