//shows a list of former members
import React, {Component} from 'react';
import { Grid, Table, Button, Form, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import {getRemovedMembers} from '../reducers/client.js'
import {getClubs} from '../actions/club_list'
import { connect } from 'react-redux'
import {memberFormData} from '../reducers/memberFormData'
import { updateMemberFormData } from '../actions/memberForm'

class RemovedMembers extends Component {
  state = {
    members: [
      {
        id: 3,
        club_id: 34,
        firstName: "Bob",
        lastName: "Marley",
        email: "wow@wow.com",
        memberStatus: "removed",
      },
      {
        id: 52,
        club_id: 35,
        firstName: "Jane",
        lastName: "Doe",
        email: "noWay@wow.com",
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

  componentDidMount() {
    this.loadUpdatedMembers();
    this.props.getClubs();

  }

  loadUpdatedMembers = () => {
    this.getRemovedMembers = (club_id) => {(them) => {
      this.setState({
        members: them,
      })
    }}
  }

  handleOnChange = (event) => {
    // console.log(event.target.options[event.target.selectedIndex].id)

    let name=""
    let value=""
    if(event.target.name === "club_id") {
      name = event.target.name;
      value = event.target.options[event.target.selectedIndex].id

    } else {

       name = event.target.name;
       value = event.target.value;

    }

    const currentMemberFormData = Object.assign({},this.props.memberFormData, {
      [name]: value
    })

    this.props.updateMemberFormData(currentMemberFormData)

  }




  render() {
    const memberList = this.state.members.map((m) => {

        if(parseInt(m.club_id) === parseInt(this.props.memberFormData.club_id)) {
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
        }
    })



    return(
      <div>
        <Grid>
        <h1>Former Member List</h1>
        <br />

        <Form onSubmit={this.handleSubmitClick}>
        <Row>

         <Col xs={12} md={4}>
          <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
            <FormControl componentClass="select" placeholder="select" onChange={this.handleOnChange} name="club_id">
            {this.props.clubs.map((club, key) => <option name="club_id" id={club.id} key={club.id}>{club.name}</option>)}
            <option value="test">...</option>
            <  /FormControl>
       </FormGroup>
        </Col>
        </Row>
        </Form>
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

const mapStateToProps = (state) => {
  return({
    clubs: state.clubs,
    memberFormData: state.memberFormData
  })
}

export default connect(mapStateToProps, {
  getClubs,
  updateMemberFormData
})(RemovedMembers)
