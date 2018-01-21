import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Form } from 'react-bootstrap'
import { Grid, Row, Col, Button} from 'react-bootstrap'
import { getClubs } from '../actions/club_list'
import { connect } from 'react-redux'
import {memberFormData} from '../reducers/memberFormData'
import { createMember } from '../actions/memberForm'
import { updateMemberFormData } from '../actions/memberForm'

function FieldGroup({ id, label, help, ...props }) {
   return (
     <FormGroup controlId={id}>
       <ControlLabel>{label}</ControlLabel>
       <FormControl {...props} />
       {help && <HelpBlock>{help}</HelpBlock>}
     </FormGroup>
   );
}

class NewUser extends Component {

    componentDidMount() {
      this.props.getClubs()

    }

    handleOnChange = (event) => {
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
    handleSubmitClick = (event) => {
      event.preventDefault();
      this.props.createMember(this.props.memberFormData)
  }

  render() {
    const { club_id, username, password} = this.props.memberFormData;
    return(
      <div>
      <Grid>

      <h3>Personal Information</h3>
      <br />
      <Form onSubmit={this.handleSubmitClick}>
      <Row>

       <Col xs={12} md={8}>
       <FormGroup controlId="formControlsSelect">
     <ControlLabel>Select</ControlLabel>
     <FormControl componentClass="select" placeholder="select" onChange={this.handleOnChange} name="club_id">
     {this.props.clubs.map((club, key) => <option name="club_id" id={club.id} key={club.id}>{club.name}</option>)}
     <option value="test">...</option>
     </FormControl>
   </FormGroup>
       </Col>
      </Row>
      <Row>
         <Col xs={12} md={4}>
         <FieldGroup
              id="username"
              type="text"
              label="Username"
              placeholder="Enter Username"
              name="username"
              onChange={this.handleOnChange}
              value={username}
          />
         </Col>
         <Col xs={12} md={4}>
         <FieldGroup
            id="password"
            type="password"
            label="Password"
            placeholder="Enter Password"
            name="password"
            onChange={this.handleOnChange}
            value={password}
         />
         </Col>
      </Row>

       <Row>

         <Col xs={4} md={4}>
         <Button bsStyle="primary" type="submit" onClick={this.handleSubmitClick}>
         {this.props.submit}
         </Button>&nbsp;

         </Col>

       </Row>
       </Form>
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
 updateMemberFormData,
 createMember
})(NewUser)
