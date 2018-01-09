import {UserInfo} from './UserInfo'
import React, { Component } from 'react'
import { Grid, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import memberFormData from '../reducers/memberFormData'
import { createMember } from '../actions/memberForm'
import { updateMemberFormData } from '../actions/memberForm'
import {bindActionCreators} from 'redux'
import {UserContactInfo} from './UserContactInfo'

//split this and the contactinfo components up.
class AddMember extends Component {

  formData = (event) => {
    let name=""
    let value=""
    if(event.target.name === "club_id") {
      name = event.target.name;
      value = event.target.options[event.target.selectedIndex].id
    } else {
       name = event.target.name;
       value = event.target.value;
    }
    const currentMemberFormData = Object.assign({},this.props.memberFormData, {
      [name]: value
    })
    return currentMemberFormData
  }
  handleMemberOnChange = (event) => {


    this.props.updateMemberFormData(this.formData(event))

  }
  handleContactInfoOnChange = (event) => {

  }
  handleKidsOnChange = (event) => {
    let name=""
    let value=""

  }

  handleFamiliesOnChange = (event) => {

  }
  handleSubmitClick = (event) => {

    event.preventDefault();

    this.props.createMember(this.props.memberFormData);
    this.props.history.push(`/contactinfo`);

    // window.location = "/contactinfo"
  }



  render() {

    return(
      <div>
        <Grid>
        <Row>
          <Col xs={4} md={2}></Col>
          <Col xs={8} md={8}>
            <h1>Add Member</h1>
          </Col>
          <Col xs={4} md={2}></Col>
        </Row>
        <br />
        <Row className="show-grid">
          <Col xs={4} md={2}></Col>
          <Col xs={8} md={8}>
            <UserInfo
            handleOnChange={this.handleMemberOnChange}
            handleSubmitClick={this.handleSubmitClick}

              />
            </Col>
            <Col xs={4} md={2}></Col>
          </Row>
        </Grid>
      </div>
    )

}
}


const mapStateToProps = (state) => {
  return({
    clubs: state.clubs,
    memberFormData: state.memberFormData,
    members: state.members,


  })

}

const mapDispatchToProps = (dispatch)  => {
  return bindActionCreators({
    updateMemberFormData,
    createMember

  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMember)
