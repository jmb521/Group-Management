import React from 'react'
import { Row, Col, Button} from 'react-bootstrap'
import FieldGroup from '../fieldgroup.js'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/it';
export const Kids = (props) => {

    return(
      <div>
      <Row>
        <Col xs={12} md={8}>
        <FieldGroup
             id={props.id.toString()}
             type="text"
             label="Kid Name"
             placeholder="Enter your child's first and last name"
             name="kids_name"
             onChange={props.handleKidsNameOnChange}
            //  value={first_name}
         />

        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
        <DayPickerInput
        label="Kid Birthday"
        id="kid_birthday"
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={`${formatDate(new Date())}`}
        onDayChange={kidsBirthday =>{props.handleKidsBirthdayOnChange(kidsBirthday, props.id)}}

        />
        </Col>
      </Row>
      <Button onClick={() => {props.onRemoveClick(props.id)}}>Remove</Button>
      </div>
    )
  }
