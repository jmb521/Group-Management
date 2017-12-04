//shows a list of former members
import React, {Component} from 'react';
import { Grid, Table, Button} from 'react-bootstrap';


class RemovedMembers extends Component {
  state = {
    members: [
      {
        id: 3,
        firstName: "Bob",
        lastName: "Marley",
        email: "wow@wow.com",
        memberStatus: "removed",
      }
    ]
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      memberStatus: "current member"
    })
  }

  render() {
    const memberList = this.state.members.map((m) => {
      return (
        <tbody key={m.id}>
        <tr>
        <td>{m.firstName}</td>
        <td>{m.lastName}</td>
        <td>{m.email}</td>
        <td><Button onClick={this.handleClick}>Reinstate</Button></td>
      </tr>
      </tbody>
    )
    })

    return(
      <div>
        <Grid>
        <h1>Former Member List</h1>
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
}

export default RemovedMembers
