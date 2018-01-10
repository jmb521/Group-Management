import React from 'react'
import { Row, Col, Panel, FormGroup, ControlLabel} from 'react-bootstrap'
import FieldGroup from '../fieldgroup.js'
var DatePicker = require("react-bootstrap-date-picker");
export const Family = (props) => {


    return(
      <Panel>
      <div>

      <Row>

        <Col xs={12} md={12}>
          <h3>Family Info</h3>
          <FormGroup>
            <ControlLabel>Your Birthday</ControlLabel>
            <DatePicker
            id="user_birthday"
            onChange={props.handleOnChange}
            name="family"
             />
            </FormGroup>

            <FieldGroup
            id="spouses_name"
            placeholder="Enter your Spouse's name"
            label="Spouse Name"
            onChange={props.handleOnChange}
            name="family"
            />
            <FormGroup>
              <ControlLabel>Spouse Birthday</ControlLabel>
              <DatePicker
              id="spouses_birthday"
              onChange={props.handleOnChange}
              name="family"
              />
              </FormGroup>
              </Col>

      </Row>

      </div>
      </Panel>
    )
  }
