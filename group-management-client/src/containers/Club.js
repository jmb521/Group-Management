import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, Form, Grid, Row, Col, HelpBlock, Button} from 'react-bootstrap'

class Club extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    }
  }

  handleClearClick = () => {
    this.setState({
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    })
  }
  render() {
    function FieldGroup({id, label, help, ...props}) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      )

    }
    return (
      <div>
        <Grid>
          <h3>Choose your Club Here</h3>
          <br />
          <Form>

          <Row>
          <Col xs={4} md={2}></Col>
            <Col xs={4} md={8}>
            <FieldGroup
              id="name"
              type="text"
              label="Club Name"
              placeholder="Enter club name"
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
              />
              </Col>
            <Col xs={12} md={2}>
            <FieldGroup
              id="state"
              type="text"
              label="State"
              placeholder="State"
              />
              </Col>
            <Col xs={12} md={2}>
              <FieldGroup
                id="zipcode"
                type="text"
                label="Zipcode"
                placeholder="90210"
                />
            </Col>
            </Row>
            <Row>
            <Col xs={4} md={2}></Col>
            <Col xs={4} md={4}>
            <Button bsStyle="primary" type="submit" onClick={this.handleSubmitClick}>
              Submit
            </Button>&nbsp;
            <Button onClick={this.handleClearClick}>
              Clear
            </Button>
            </Col>
            </Row>

            </Form>
            </Grid>
            </div>




    )
  }
}
export default Club
