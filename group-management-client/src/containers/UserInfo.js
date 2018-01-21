
import React from 'react'
import { Form, Grid, Row, Col, Button } from 'react-bootstrap'
import GetClubs from './GetClubs'
import FieldGroup from '../fieldgroup.js'


export const UserInfo = (props) => {

     return(
       <div>
       <Grid>

       <h3>Personal Information</h3>
       <br />
       <GetClubs validationState={props.clubIdStatus ? "success" : null} />

       <Form onSubmit={props.handleSubmitClick}>
       <Row>

        <Col xs={12} md={4}>
        </Col>
       </Row>
       <Row>
          <Col xs={12} md={6}>
          <FieldGroup
               id="first_name"
               type="text"
               label="First Name"
               placeholder="Enter first name"
               name="first_name"
               onChange={props.handleOnChange}
               validationState={props.formErrors.first_name ? "success" : null}
           />
          </Col>
          <Col xs={12} md={6}>
          <FieldGroup
             id="last_name"
             type="text"
             label="Last Name"
             placeholder="Enter last name"
             name="last_name"
             onChange={props.handleOnChange}
             validationState={props.formErrors.last_name ? "success" : null}
          />
          </Col>
       </Row>
       <Row>
       <Col xs={12} md={12}>
       <FieldGroup
       id="address1"
       type="text"
       label="Address"
       placeholder="Enter street address"
       name="address1"
       onChange={props.handleOnChange}
       validationState={props.formErrors.address1 ? "success" : null}
       />

       </Col>
       </Row>
       <Row>
        <Col xs={12} md={12}>
          <FieldGroup
          id="address2"
          type="text"
          label="Address (Optional)"
          placeholder="Enter apt. number or additional details"
          name="address2"
          onChange={props.handleOnChange}
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
          onChange={props.handleOnChange}
          validationState={props.formErrors.city ? "success" : null}
          />
        </Col>
        <Col xs={12} md={4}>
          <FieldGroup
          id="state"
          type="text"
          label="State"
          placeholder="Enter State"
          name="state"
          onChange={props.handleOnChange}
          validationState={props.formErrors.state ? "success" : null}
          />
        </Col>
        <Col xs={12} md={4}>
        <FieldGroup
        id="zipcode"
        type="text"
        label="ZipCode"
        placeholder="Enter ZipCode"
        name="zipcode"
        onChange={props.handleOnChange}
        validationState={props.formErrors.zipcode ? "success" : null}
        />
        </Col>
        </Row>
        <br />
        <Row>

          <Col xs={4} md={4}>
          <Button bsStyle="primary" type="submit" onClick={props.handleSubmitClick} disabled={props.disabled}>
          Submit
          </Button>&nbsp;

          </Col>

        </Row>
        </Form>
       </Grid>
      </div>
     )
   }
