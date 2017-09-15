import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Form } from 'react-bootstrap'
import { Grid, Row, Col, Button} from 'react-bootstrap'

class UserInfoForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: ""
    }

  }


  handleClearClick = () => {
    this.setState({
      first_name: "",
      last_name: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: ""

    })

  }

  handleSubmitClick = () => {

  }



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
       <br />
       <Form>
       <Row>
          <Col xs={12} md={4}>
          <FieldGroup
               id="first_name"
               type="text"
               label="First Name"
               placeholder="Enter first name"
           />
          </Col>
          <Col xs={12} md={4}>
          <FieldGroup
             id="last_name"
             type="text"
             label="Last Name"
             placeholder="Enter last name"
          />
          </Col>
       </Row>
       <Row>
       <Col xs={12} md={8}>
       <FieldGroup
       id="address1"
       type="text"
       label="Address"
       placeholder="Enter street address"
       />

       </Col>
       </Row>
       <Row>
        <Col xs={12} md={8}>
          <FieldGroup
          id="address2"
          type="text"
          label="Address"
          placeholder="Enter apt. number or additional details"
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
          />
        </Col>
        <Col xs={12} md={2}>
          <FieldGroup
          id="state"
          type="text"
          label="State"
          placeholder="Enter State"
          />
        </Col>
        <Col xs={12} md={2}>
        <FieldGroup
        id="zipcode"
        type="text"
        label="ZipCode"
        placeholder="Enter ZipCode"
        />
        </Col>
        </Row>
        <br />
        <Row>

          <Col xs={4} md={4}>
          <Button bsStyle="primary" type="submit" onClick={this.handleSubmitClick}>
          {this.props.submit}
          </Button>&nbsp;
          <Button onClick={this.handleClearClick}>
          {this.props.clear}
            </Button>
          </Col>

        </Row>
        </Form>
       </Grid>
      </div>
     )
   }

}

export default UserInfoForm
