import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, Form, Grid, Row, Col, HelpBlock, Button} from 'react-bootstrap'

import { connect } from 'react-redux'
import clubFormData from '../reducers/clubFormData'
import {updateClubFormData} from '../actions/clubform'
import { createClub } from '../actions/clubform'


function FieldGroup({id, label, help, inputRef, ...props}) {
  return (
    <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} inputRef={inputRef} />
    {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )

}
class Club extends Component {



  handleOnChange = (event) => {
    const {name, value} = event.target
    const currentClubFormData = Object.assign({},this.props.clubFormData, {
      [name]: value
    })
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
                />
            </Col>
            </Row>
            <Row>
            <Col xs={4} md={2}></Col>
            <Col xs={4} md={4}>
            <Button bsStyle="primary" type="submit">
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
