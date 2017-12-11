//this is for setting all members to a "holding" position so that the membership person can process all members and see which ones still need to be changed.
import React from 'react';
import {Grid, Table, Button} from 'react-bootstrap'
import {GetClubs} from './GetClubs'

export const MemberRenewal = function(props) {

    const memberList = props.members.map((m) => {
    return (
      <tbody key={m.id}>
      <tr>
        <td>{m.first_name}</td>
        <td>{m.last_name}</td>
        <td>{m.user_contact_info.email}</td>
        <td>{m.membership_status.is_member}</td>
        <td><Button onClick={props.renewOnClick}>Renew</Button> &nbsp; <Button onClick={props.removeOnClick}>Remove</Button></td>
      </tr>
      </tbody>
    )

    });

    return (
      <div className="memberrenewal">
        <Grid>
          <h1>Membership Renewal</h1>
          <h5> This is only for current members</h5>
          <br />
          <GetClubs clubs={props.clubs} handleOnChange={props.handleOnChange} />
          <br />
          <Table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Membership Status</th>
                <th></th>
              </tr>
            </thead>

              {memberList}


          </Table>
        </Grid>
      </div>
    )
  }
