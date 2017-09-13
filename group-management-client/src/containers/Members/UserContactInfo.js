import React, { Component } from 'react'

class UserContactInfo extends Component {

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
          <Col xs={12} md={8}>
            <FormGroup controlId="formControlsSelect">
            <ControlLabel>Preferred Method of Contact</ControlLabel>
              <FormControl componentClass="select" placeholder="Preferred Method">

                <option value="Email">Email</option>
                <option value="Facebook">Facebook</option>
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
