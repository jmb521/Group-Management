import {UserInfo} from './UserInfo'
import React, { Component } from 'react'
import { Grid, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux'

import { createMember } from '../actions/memberForm'
import { updateMemberFormData } from '../actions/memberForm'
import {bindActionCreators} from 'redux'

class AddMember extends Component {
  constructor() {
    super()
    this.state = {
      firstNameValid: false,
      lastNameValid: false,
      addressValid: false,
      cityValid: false,
      zipcodeValid: false,
      stateValid: false,
      clubIdValid: false,
      formValid: false,
      formErrors: {
        club_id: "",
        zipcode: "",
        state: "",
        first_name: "",
        last_name: "",
        address1: "",
        city: "",

      }
    }
  }
  validateInput = (name, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let zipcodeValid = this.state.zipcodeValid;
    let stateValid = this.state.stateValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let addressValid = this.state.addressValid;
    let cityValid = this.state.cityValid;
    let clubIdValid = this.state.clubIdValid;

    console.log("name -> ", name)
    console.log("value -> ", value)

    switch(name) {
      case 'first_name':
        firstNameValid = value.match(/[a-zA-Z]+/)
        fieldValidationErrors.first_name = firstNameValid
        break;
      case 'last_name':
        lastNameValid = value.match(/[a-zA-Z]+/)
        fieldValidationErrors.last_name = lastNameValid
        break;
      case 'address1':
        addressValid = value.match(/([0-9a-zA-Z\s.])+/)
        fieldValidationErrors.address1 = addressValid
        break;
      case 'zipcode':
        zipcodeValid = value.match(/^\d{5}$/)
        fieldValidationErrors.zipcode = zipcodeValid
        break;
      case 'state':
        stateValid = value.match(/^[a-zA-Z]{2}$/)
        fieldValidationErrors.state = stateValid
        break;
      case 'city':
        cityValid = value.match(/[a-zA-Z]+/)
        fieldValidationErrors.city = cityValid
        break;
      default:
        break;
    }

    clubIdValid = this.props.memberFormData.club_id.match(/[\d]*/)


    this.setState({
      formErrors: fieldValidationErrors,
      zipcodeValid: zipcodeValid,
      stateValid: stateValid,
      firstNameValid: firstNameValid,
      lastNameValid: lastNameValid,
      cityValid: cityValid,
      addressValid: addressValid,
      clubIdValid: clubIdValid,
    }, this.validateForm)
  }

  validateForm = () => {
    this.setState({
      formValid: this.state.zipcodeValid && this.state.stateValid && this.state.firstNameValid && this.state.lastNameValid && this.state.addressValid && this.state.cityValid && this.state.clubIdValid,
    })

  }
  formData = (event) => {
    let name=""
    let value=""

       name = event.target.name;
       value = event.target.value;


    this.validateInput(name, value)

    const currentMemberFormData = Object.assign({},this.props.memberFormData, {
      [name]: value
    })
    return currentMemberFormData
  }
  handleMemberOnChange = (event) => {

    this.props.updateMemberFormData(this.formData(event))
  }

  handleSubmitClick = (event) => {

    event.preventDefault();

    this.props.createMember(this.props.memberFormData);
    this.props.history.push(`/contactinfo`);

    // window.location = "/contactinfo"
  }




  render() {

    return(
      <div>
        <Grid>
        <Row>
          <Col xs={4} md={2}>

          </Col>
          <Col xs={8} md={8}>
            <h1>Add Member</h1>
          </Col>
          <Col xs={4} md={2}></Col>
        </Row>
        <br />
        <Row className="show-grid">
          <Col xs={4} md={2}></Col>
          <Col xs={8} md={8}>
            <UserInfo
            handleOnChange={this.handleMemberOnChange}
            handleSubmitClick={this.handleSubmitClick}
            disabled={!this.state.formValid}
            formErrors={this.state.formErrors}
            clubIdStatus={this.state.clubIdValid}
              />
            </Col>
            <Col xs={4} md={2}></Col>
          </Row>
        </Grid>
      </div>
    )

}
}


const mapStateToProps = (state) => {
  return({
    clubs: state.clubs,
    memberFormData: state.memberFormData,
    members: state.members,


  })

}

const mapDispatchToProps = (dispatch)  => {
  return bindActionCreators({
    updateMemberFormData,
    createMember

  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMember)
