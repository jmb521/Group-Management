import React from 'react'
import { Row, Col, Button} from 'react-bootstrap'
import FieldGroup from '../fieldgroup.js'
var DatePicker = require("react-bootstrap-date-picker");
export const Kids = (props) => {

    return(
      <div>
      <Row>
        <Col xs={12} md={8}>
        <FieldGroup
             id="kid_name"
             type="text"
             label="Kid Name"
             placeholder="Enter your child's first and last name"
             name="kids"
             onChange={props.handleOnChange}
            //  value={first_name}
         />

        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
        <DatePicker
        label="Kid Birthday"
        id="kid_birthday"
        onChange={props.handleOnChange}
        name="kids"
        />
        </Col>
      </Row>
      <Button onClick={() => {props.onRemoveClick(props.id)}}>Remove</Button>
      </div>
    )
  }
