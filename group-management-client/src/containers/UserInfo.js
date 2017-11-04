import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Form } from 'react-bootstrap'
import { Grid, Row, Col, Button} from 'react-bootstrap'
import { getClubs } from '../actions/club_list'
import { connect } from 'react-redux'

function FieldGroup({ id, label, help, ...props }) {
   return (
     <FormGroup controlId={id}>
       <ControlLabel>{label}</ControlLabel>
       <FormControl {...props} />
       {help && <HelpBlock>{help}</HelpBlock>}
     </FormGroup>
   );
}


class UserInfoForm extends Component {


  componentDidMount() {
    this.props.getClubs()

  }
  handleSubmitClick = (event) => {
    event.preventDefault();
  }


   render() {

     return(
       <div>
       <Grid>

       <h3>Personal Information</h3>
       <br />
       <Form>
       <Row>

        <Col xs={12} md={4}>
        <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
      {this.props.clubs.map((club, key) => <option value={club.id} key={key}>{club.name}</option>)}
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
        </Col>
       </Row>
       <Row>
          <Col xs={12} md={4}>
          <FieldGroup
               id="first_name"
               type="text"
               label="First Name"
               placeholder="Enter first name"
               name="first_name"
           />
          </Col>
          <Col xs={12} md={4}>
          <FieldGroup
             id="last_name"
             type="text"
             label="Last Name"
             placeholder="Enter last name"
             name="last_name"
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
       name="address1"
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
          name="address2"
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
          />
        </Col>
        <Col xs={12} md={2}>
          <FieldGroup
          id="state"
          type="text"
          label="State"
          placeholder="Enter State"
          name="state"
          />
        </Col>
        <Col xs={12} md={2}>
        <FieldGroup
        id="zipcode"
        type="text"
        label="ZipCode"
        placeholder="Enter ZipCode"
        name="zipcode"
        />
        </Col>
        </Row>
        <br />
        <Row>

          <Col xs={4} md={4}>
          <Button bsStyle="primary" type="submit" onClick={this.handleSubmitClick}>
          {this.props.submit}
          </Button>&nbsp;

          </Col>

        </Row>
        </Form>
       </Grid>
      </div>
     )
   }

}

const mapStateToProps = (state) => {
  return({
    clubs: state.clubs
  })
}

export default connect(mapStateToProps, { getClubs })(UserInfoForm)
