//shows a list of potential members. They need to be approved to have full access.
import React, {Component} from 'react';
import { Grid, Table, Button} from 'react-bootstrap';


class PendingMembers extends Component {
  state = {
    members: [
      {
        id: 1,
        firstName: "Jennifer",
        lastName: "Pazos",
        email: "me@me.com",
        signUpDate: "July 1, 2017",
        onClick:'',
      },
      {
        id: 2,
        firstName: "Ashley",
        lastName: "Buttercup",
        email: "you@you.com",
        signUpDate: "July 2, 2017",
        onClick: '',
      }
    ]
  }

  render() {
    const memberList = this.state.members.map((m) => {
      return (
        <tbody key={m.id}>

        <tr>
            <td>{m.firstName}</td>
            <td>{m.lastName}</td>
            <td>{m.email}</td>
            <td>{m.signUpDate}</td>
            <td><Button id={m.id} onClick={m.onClick}>Approve</Button></td>
        </tr>

        </tbody>
      )
    })
    return(
      <div>
        <Grid>
          <h1 className="pendingmembersheader">Pending Members</h1>
          <Table striped bordered condensed hover className="pendinggrid">
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
}
export default PendingMembers;
