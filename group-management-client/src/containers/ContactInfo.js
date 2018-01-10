import React, {Component} from 'react'
import {UserContactInfo} from './UserContactInfo'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import store from '../store.js'
import {Kids} from './Kids'
import {Family} from './Family'
import { Grid, Row, Col, Form, Panel, Button} from 'react-bootstrap'
import


class ContactInfo extends Component {
  constructor() {
    super()
    this.state = {
      KidCount: 1,

    }

  }

  formData = (event) => {
    let name=""
    let value=""
    if(event.target.name === "contactinfo") {
      name = event.target.name;
      value = event.target.options[event.target.selectedIndex].id
    } else if (event.target.name === "kids") {

    } else if (event.target.name === "family"){
       name = event.target.name;
       value = event.target.value;
    }
    const currentMemberFormData = Object.assign({},this.props.memberFormData, {
      [name]: value
    })
    return currentMemberFormData
  }
  handleContactInfoOnChange = (event) => {
    console.log("contact", event.target.id)

    // this.props.updateMemberFormData(this.formData(event))

  }

  handleSubmitClick = (event) => {

    event.preventDefault();

    this.props.createMember(this.props.memberFormData);
    this.props.history.push(`/contactinfo`);

    // window.location = "/contactinfo"
  }


  addKid = () => {
    this.setState({
      KidCount: this.state.KidCount + 1,

    })

  }
  handleRemoveClick = (id) => {
    this.setState({
      KidCount: this.state.KidCount -1,
    })
  }

  handleOnSubmit = (event) => {
    console.log("submit event data: ", event)
  }

render() {

    const Kidcomponent = [];

    for(var i=0; i< this.state.KidCount; i++) {
      Kidcomponent.push(<Panel key={i}><Kids key={i} id={i} onRemoveClick={this.handleRemoveClick} handleOnChange={this.handleContactInfoOnChange} /></Panel>)
    }
    console.log("$%", Kidcomponent)


    return (
      <Grid>
      <div>
        <Form onSubmit={this.handleOnSubmit}>
        <div>
          <UserContactInfo
          handleOnChange={this.handleContactInfoOnChange}
          />
        </div>
        <div>
          <Family
          handleOnChange={this.handleContactInfoOnChange}
           />
        </div>
        <div>
        <Button onClick={this.addKid}> Add Kid</Button>

          {Kidcomponent}

          <Button bsStyle="success">Submit</Button>
        </div>

        </Form>
      </div>
      </Grid>

    )
  }
  }
  const mapStateToProps = state => {
    return ({
      members: state.members,
      kids: state.kids,
      family: state.family,
      contact_info: state.contact_info,
      userKidsFormData: state.userKidsFormData,
      userFamiliesFormData: state.userFamiliesFormData,
      contactInfoFormData: state.contactInfoFormData,
    })
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    })
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo)
