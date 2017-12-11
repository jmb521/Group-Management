//shows a list of potential members. They need to be approved to have full access.
import React from 'react';
import { Grid, Table, Button} from 'react-bootstrap';
import {GetClubs} from './GetClubs'

export const PendingMembers = function(props) {



    const memberList = props.members.map((m) => {
      return (
        <tbody key={m.id}>

        <tr>
            <td>{m.firstName}</td>
            <td>{m.lastName}</td>
            <td>{m.email}</td>
            <td>{m.signUpDate}</td>
            <td><Button id={m.id} onClick={props.approvePendingMemberOnClick}>Approve</Button></td>
        </tr>

        </tbody>
      )
    })
    return(
      <div>
        <Grid>
          <h1 className="pendingmembersheader">Pending Members</h1>
          <GetClubs clubs={props.clubs} handleOnChange={props.handlOnChange}/>
          <Table className="pendinggrid">
            <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Sign Up Date</th>
              <th></th>
            </tr>
            </thead>


              {memberList}


          </Table>
        </Grid>
      </div>
    )
  }
