// //shows a list of former members
import React from 'react';
import {GetClubs} from './GetClubs'
import { Grid, Table, Button, Form, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export const RemovedMembers = function(props) {
  console.log("removed", props)
  console.log("props", props)
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
