// //shows a list of former members
import React from 'react';
import {GetClubs} from './GetClubs'
import { Grid, Table, Button} from 'react-bootstrap';

export const RemovedMembers = function(props) {
  console.log("removedMembers", props)
  const memberList = props.members.map((m) => {

         if(parseInt(m.club_id, 10) === parseInt(props.memberFormData.club_id, 10)) {
           return (

             <tbody key={m.id}>
             <tr>
             <td>{m.firstName}</td>
             <td>{m.lastName}</td>
             <td>{m.email}</td>
             <td><Button onClick={props.onClick}>Reinstate</Button></td>
             </tr>
             </tbody>
           )
         } else {
           return(
             <p> No members to remove</p>
           )
         }
       })



  return(
    <div>
      <Grid>
        <h1>Former Member List</h1>
          <GetClubs clubs={props.clubs} handleOnChange={props.handleOnChange} />
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
