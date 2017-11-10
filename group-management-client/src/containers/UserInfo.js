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


class UserInfoForm extends Component {
  componentDidMount() {
    this.props.getClubs()

  }

  handleOnChange = (event) => {
    // console.log(event.target.options[event.target.selectedIndex].id)
    console.log(event.target.name)
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

    this.props.createMember(this.props.memberFormData);

    window.location = "/contactinfo"
  }


   render() {
     const { club_id, first_name, last_name, address1, address2, city, state, zipcode} = this.props.memberFormData;
     return(
       <div>
       <Grid>

       <h3>Personal Information</h3>
       <br />
       <Form onSubmit={this.handleSubmitClick}>
       <Row>

        <Col xs={12} md={4}>
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
               id="first_name"
               type="text"
               label="First Name"
               placeholder="Enter first name"
               name="first_name"
               onChange={this.handleOnChange}
              //  value={first_name}
           />
          </Col>
          <Col xs={12} md={4}>
          <FieldGroup
             id="last_name"
             type="text"
             label="Last Name"
             placeholder="Enter last name"
             name="last_name"
             onChange={this.handleOnChange}
            //  value={last_name}
          />
          </Col>
       </Row>
       <Row>
       <Col xs={12} md={8}>
       <FieldGroup
       id="address1"
       type="text"
       label="Address"
       placeholder="Enter street address"
       name="address1"
       onChange={this.handleOnChange}
      //  value={address1}
       />

       </Col>
       </Row>
       <Row>
        <Col xs={12} md={8}>
          <FieldGroup
          id="address2"
          type="text"
          label="Address"
          placeholder="Enter apt. number or additional details"
          name="address2"
          onChange={this.handleOnChange}
          // value={address2}
          />
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={4}>
          <FieldGroup
          id="city"
          type="text"
          label="City"
          placeholder="Enter City"
          name="city"
          onChange={this.handleOnChange}
          // value={city}
          />
        </Col>
        <Col xs={12} md={2}>
          <FieldGroup
          id="state"
          type="text"
          label="State"
          placeholder="Enter State"
          name="state"
          onChange={this.handleOnChange}
          // value={state}
          />
        </Col>
        <Col xs={12} md={2}>
        <FieldGroup
        id="zipcode"
        type="text"
        label="ZipCode"
        placeholder="Enter ZipCode"
        name="zipcode"
        onChange={this.handleOnChange}
        // value={zipcode}
        />
        </Col>
        </Row>
        <br />
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
})(UserInfoForm)
