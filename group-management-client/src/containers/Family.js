import React from 'react'
import { Row, Col, Panel, FormGroup, ControlLabel} from 'react-bootstrap'
import FieldGroup from '../fieldgroup.js'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
export const Family = (props) => {

console.log("family, ", props)
    return(
      <Panel>
      <div>

      <Row>

        <Col xs={12} md={12}>
          <h3>Family Info</h3>
          <FormGroup>
            <ControlLabel>Your Birthday </ControlLabel>
            <DayPickerInput
            id="user_birthday"
            onDayChange={user_birthday => {props.handleUserBirthdayOnChange(user_birthday)}}
            formatDate={formatDate}
            parseDate={parseDate}
            placeholder={`${formatDate(new Date())}`}
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
              <ControlLabel>Spouse Birthday </ControlLabel>
              <DayPickerInput
              id="spouses_birthday"
              onDayChange={spouses_birthday => {props.handleSpousesBirthdayOnChange(spouses_birthday)}}
              name=""
              className="spouses_birthday"
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder={`${formatDate(new Date())}`}

              />
              </FormGroup>
              </Col>

      </Row>

      </div>
      </Panel>
    )
  }
