import React from 'react'
import {Row, Col, FormGroup, ControlLabel, Panel, FormControl, HelpBlock, Checkbox} from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
   return (
     <FormGroup controlId={id}>
       <ControlLabel>{label}</ControlLabel>
       <FormControl {...props} />
       {help && <HelpBlock>{help}</HelpBlock>}
     </FormGroup>
   );
}
export const UserContactInfo = (props) => {


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
            <FormGroup controlId="formControlsSelect">
            <ControlLabel>Preferred Method of Contact</ControlLabel>
              <FormControl componentClass="select" placeholder="Preferred Method" onChange={props.handleOnChange} name="contactinfo" id="preferred_method">
                <option>...</option>
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
