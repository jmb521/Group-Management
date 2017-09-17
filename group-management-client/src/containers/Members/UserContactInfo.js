import React, { Component } from 'react'

class UserContactInfo extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      phone: "",
      preferred_method: "Facebook",
      text_message: "true"
    }
  }

  render() {
    return (
      <Grid>
        <Form>
        </Row>
        <h3>Contact Info</h3>
        <Row>
          <Col xs={12} md={4}>
          <FieldGroup
          id="email"
          type="text"
          label="Email"
          placeholder="Enter email"
          />
          </Col>
          <Col xs={12} md={4}>
          <FieldGroup
          id="home_phone"
          type="text"
          label="Phone"
          placeholder="Enter phone"
          />
          </Col>
          </Row>
          <Row>
          <Col xs={12} md={4}>
          <Checkbox checked readOnly>
            Yes, you can send me a text. 
          </Checkbox>
          </Col>
          </Row>
          <Row>
          <Col xs={12} md={8}>
            <FormGroup controlId="formControlsSelect">
            <ControlLabel>Preferred Method of Contact</ControlLabel>
              <FormControl componentClass="select" placeholder="Preferred Method">
                <option value="Facebook">Facebook</option>
                <option value="Email">Email</option>
                <option value="Text Message">Text Message</option>
              </FormControl>
            </FormGroup>
          </Col>
          </Row>
        </Form>
      </Grid>
    )
  }
}
