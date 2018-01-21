import React from 'react'
import {Row, Col, FormGroup, ControlLabel, Panel, FormControl, HelpBlock, Checkbox} from 'react-bootstrap'
import FieldGroup from '../fieldgroup.js'
export const UserContactInfo = (props) => {
console.log("usercontactinfo", props)
console.log("email form errors", props.formErrors.email)
    return (


      <div>
      <Panel>
        <h3>Contact Info</h3>
        <Row>
          <Col xs={12} md={4}>
          <FieldGroup
          id="email"
          type="text"
          label="Email"
          name="contactinfo"
          placeholder="Enter email"
          onChange={props.handleOnChange}
          validationState={props.formErrors.email ? "success" : null}
          />
          </Col>
          <Col xs={12} md={4}>
          <FieldGroup
          id="home_phone"
          type="text"
          label="Phone"
          name="contactinfo"
          placeholder="Enter phone"
          onChange={props.handleOnChange}
          validationState={props.formErrors.home_phone ? "success" : null}
          />
          </Col>
          </Row>
          <Row>
          <Col xs={12} md={4}>
          <Checkbox onChange={props.handleOnChange} name="contactinfo" id="text_message">
            Yes, you can send me a text.
          </Checkbox>
          </Col>
          </Row>
          <Row>
          <Col xs={12} md={8}>
            <FormGroup controlId="formControlsSelect" validationState={props.formErrors.preferred_method ? "success" : null}>
            <ControlLabel>Preferred Method of Contact</ControlLabel>
              <FormControl componentClass="select" placeholder="Preferred Method" onChange={props.handleOnChange} name="contactinfo" id="preferred_method" >
                <option value="...">...</option>
                <option value="Facebook">Facebook</option>
                <option value="Email">Email</option>
                <option value="Text Message">Text Message</option>
              </FormControl>
            </FormGroup>
          </Col>
          </Row>
          </Panel>
        </div>
    )
  }
