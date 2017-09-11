import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Form } from 'react-bootstrap'
import { Grid, Row, Col} from 'react-bootstrap'
import '../project.css'
class AddMemberForm extends Component {



   render() {
     function FieldGroup({ id, label, help, ...props }) {
        return (
          <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
          </FormGroup>
        );
      }

     return(
       <div>
       <Grid>

       <h3>Personal Information</h3>
       <Form>
       <Row>
          <Col xs={6} md={4}>
          <FieldGroup
               id="first_name"
               type="text"
               label="First Name"
               placeholder="Enter first name"
           />
          </Col>
          <Col xs={6} md={4}>
          <FieldGroup
             id="last_name"
             type="text"
             label="Last Name"
             placeholder="Enter last name"
          />
          </Col>
       </Row>
       <Row>
       <Col xs={6} md={8}>
       <FieldGroup
       id="address1"
       type="text"
       label="Address"
       placeholder="Enter street address"
       />

       </Col>
       </Row>
       <Row>
        <Col xs={6} md={8}>
          <FieldGroup
          id="address2"
          type="text"
          label="Address"
          placeholder="Enter apt. number or additional details"
          />
        </Col>
        </Row>
        <Row>
        <Col xs={4} md={4}>
          <FieldGroup
          id="city"
          type="text"
          label="City"
          placeholder="Enter City"
          />
        </Col>
        <Col xs={4} md={2}>
          <FieldGroup
          id="state"
          type="text"
          label="State"
          placeholder="Enter State"
          />
        </Col>
        <Col xs={4} md={2}>
        <FieldGroup
        id="zipcode"
        type="text"
        label="ZipCode"
        placeholder="Enter ZipCode"
        />
        </Col>
        </Row>
        <Row>
        <Col xs={8} md={8}>
        <hr className="divider" />
        </Col>
        </Row>
        </Form>
       </Grid>
      </div>
     )
   }

}

export default AddMemberForm
