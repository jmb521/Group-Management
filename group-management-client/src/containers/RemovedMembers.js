// //shows a list of former members
import React from 'react';
import GetClubs from './GetClubs'
import { Grid, Table, Button} from 'react-bootstrap';

export const RemovedMembers = function(props) {

  const memberList = props.members.map((m) => {

         if(parseInt(m.club_id, 10) === parseInt(props.memberFormData.club_id, 10)) {
           return (

             <tbody key={m.id}>
             <tr>
             <td>{m.first_name}</td>
             <td>{m.last_name}</td>
             <td>{m.user_contact_info.email}</td>
             <td><Button onClick={()=>{props.reinstateOnClick(m.membership_status.id, m.id)}}>Reinstate</Button></td>
             </tr>
             </tbody>
           )
         }
       })



  return(
    <div>
      <Grid>
        <h1>Former Member List</h1>
          <GetClubs />
          <Table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>

            {memberList}

          </Table>

      </Grid>
    </div>
  )
}
