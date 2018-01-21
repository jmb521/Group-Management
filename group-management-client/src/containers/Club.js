import React, { Component } from 'react'
import { Form, Grid, Row, Col, Button} from 'react-bootstrap'

import { connect } from 'react-redux'
import clubFormData from '../reducers/clubFormData'
import {updateClubFormData} from '../actions/clubform'
import { createClub } from '../actions/clubform'
import FieldGroup from '../fieldgroup.js'


class Club extends Component {
  constructor(props) {
    super()
    this.state = {
      nameValid: false,
      addressValid: false,
      cityValid: false,
      stateValid: false,
      zipcodeValid: false,
      formValid: false,
      formErrors: {
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
      }
    }
  }

  validateInput = (name, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let addressValid = this.state.addressValid;
    let cityValid = this.state.cityValid;
    let stateValid = this.state.stateValid;
    let zipcodeValid = this.state.zipcodeValid;

    switch(name) {
      case 'name':
        nameValid = value.match(/[a-zA-Z]+/)
        fieldValidationErrors.name = nameValid
        break;
      case 'address':
        addressValid = value.match(/([0-9a-zA-Z\s.])+/)
        fieldValidationErrors.address = addressValid
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
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      addressValid: addressValid,
      cityValid: cityValid,
      stateValid: stateValid,
      zipcodeValid: zipcodeValid,
    }, this.validateForm)
  }

  validateForm = () => {
    this.setState({
      formValid: this.state.nameValid && this.state.addressValid && this.state.cityValid && this.state.stateValid && this.state.zipcodeValid
    })
  }
  handleOnChange = (event) => {
    const {name, value} = event.target
    const currentClubFormData = Object.assign({},this.props.clubFormData, {
      [name]: value
    })
    this.validateInput(name, value)
    this.props.updateClubFormData(currentClubFormData)
  }

  handleSubmitClick = (event) => {
    event.preventDefault();
    this.props.createClub(this.props.clubFormData)
    window.location = "/membershipmanagement"
  }


  render() {
    const { name, address, city, state, zipcode } = this.props.clubFormData;
    return (
      <div>
        <Grid>
          <h3>Enter your Club info Here</h3>
          <br />
          <Form onSubmit={this.handleSubmitClick}>

          <Row>
          <Col xs={4} md={2}></Col>
            <Col xs={4} md={8}>
            <FieldGroup
              id="name"
              type="text"
              label="Club Name"
              placeholder="Enter club name"
              onChange={this.handleOnChange}
              value={name}
              name="name"
              validationState={this.state.nameValid ? "success" : null}
              />
            </Col>
            </Row>
            <Row>
            <Col xs={4} md={2}></Col>
            <Col xs={12} md={8}>
            <FieldGroup
              id="address"
              type="text"
              label="Club Address"
              placeholder="Enter your club's address"
              value={address}
              onChange={this.handleOnChange}
              name="address"
              validationState={this.state.addressValid ? "success" : null}
              />
            </Col>
            </Row>
            <Row>
            <Col xs={4} md={2}></Col>
            <Col xs={12} md={4}>
            <FieldGroup
              id="city"
              type="text"
              label="City"
              placeholder="Enter your club's city"
              value={city}
              onChange={this.handleOnChange}
              name="city"
              validationState={this.state.cityValid ? "success" : null}
              />
              </Col>
            <Col xs={12} md={2}>
            <FieldGroup
              id="state"
              type="text"
              label="State"
              placeholder="State"
              value={state}
              onChange={this.handleOnChange}
              name="state"
              validationState={this.state.stateValid ? "success" : null}
              />
              </Col>
            <Col xs={12} md={2}>
              <FieldGroup
                id="zipcode"
                type="text"
                label="Zipcode"
                placeholder="90210"
                value={zipcode}
                onChange={this.handleOnChange}
                name="zipcode"
                validationState={this.state.zipcodeValid ? "success" : null}
                />
            </Col>
            </Row>
            <Row>
            <Col xs={4} md={2}></Col>
            <Col xs={4} md={4}>
            <Button bsStyle="primary" disabled={!this.state.formValid}type="submit">
              Submit
            </Button>&nbsp;

            </Col>
            </Row>

            </Form>
            </Grid>
            </div>

    )
  }
}

const mapStateToProps = state => {
  return (
    clubFormData: state.clubFormData
  )
}
export default connect(mapStateToProps, {
  updateClubFormData,
  createClub
 })(Club)
