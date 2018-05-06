import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Form } from 'react-bootstrap'
import { Grid, Row, Col, Button} from 'react-bootstrap'
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

class ClubLogin extends Component {

    state = {
      username: "",
      password: "",
    }


    handleSubmitClick = (event) => {
      event.preventDefault();
      // this.props.createMember(this.props.memberFormData)
  }

  render() {

    return(
      <div>
      <Grid>

      <h1>Club Login</h1>
      <h4>This area is for club leaders only. You can update club information and assign user roles here.</h4>

      <br />
      <Form onSubmit={this.handleSubmitClick}>

      <Row>
         <Col xs={12} md={4}>
         <FieldGroup
              id="email"
              type="text"
              label="Email"
              placeholder="Club Email"
              name="email"
              onChange={this.handleOnChange}
              value={this.state.email}
          />
         </Col>
         </Row>
         <Row>
         <Col xs={12} md={4}>
         <FieldGroup
            id="password"
            type="password"
            label="Password"
            placeholder="Enter Password"
            name="password"
            onChange={this.handleOnChange}
            value={this.state.password}
         />
         </Col>
      </Row>

       <Row>

         <Col xs={4} md={4}>
         <Button bsStyle="primary" type="submit" onClick={this.handleSubmitClick}>
         Login
         </Button>&nbsp;

         </Col>

       </Row>
       </Form>
      </Grid>
     </div>
    )
  }

}

// const mapStateToProps = (state) => {
//  return({
//
//   //  clubs: state.clubs,
//    memberFormData: state.memberFormData
//  })
// }


export default ClubLogin
