import React, {Component} from 'react'
import {UserContactInfo} from './UserContactInfo'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import store from '../store.js'
import {Kids} from './Kids'
import {Family} from './Family'
import { Grid, Row, Col, Form, Panel, Button} from 'react-bootstrap'
import {updateContactInfoFormData} from '../actions/memberForm'
import {updateFamilyFormData} from '../actions/memberForm'
import {updateKidsFormData} from '../actions/memberForm'
import {updateContactInfo} from '../actions/memberForm'
import {updateKids} from '../actions/memberForm'
import {updateFamily} from '../actions/memberForm'
import {removeKid} from '../actions/memberForm'

class ContactInfo extends Component {
  constructor() {
    super()
    this.state = {
      KidCount: 1,

    }

  }

  contactData = (event) => {
    let name=""
    let value=""
    if(event.target.id === "text_message") {

        name = event.target.id
        value = "true"

    } else if(event.target.id === "preferred_method") {
        name = event.target.id;
        value = event.target.options[event.target.selectedIndex].value

    } else {
      name = event.target.id;
      value = event.target.value
    }

    const currentContactInfoFormData = Object.assign({}, this.props.contactInfoFormData, {
      [name]: value
    })
    console.log("currentContactInfoFormData", currentContactInfoFormData)
    return currentContactInfoFormData
  }

  addUserToContact = (fD) => {

    const updatedContactInfo = Object.assign({}, fD, {
        "user_id": this.props.members[0].id
    })
    console.log("updatedContactInfo", updatedContactInfo)
    return updatedContactInfo
  }
  handleContactInfoOnChange = (event) => {
    const fD = this.contactData(event)
    this.addUserToContact(fD)
    this.props.updateContactInfoFormData(this.addUserToContact(fD))
    }

  handleUserBirthdayOnChange = (usr_bday) => {
    const ubd= Object.assign({}, this.props.userFamiliesFormData, {
      user_birthday: usr_bday,
      user_id: this.props.members[0].id,
    })
    this.props.updateFamilyFormData(ubd)
  }
  handleSpousesBirthdayOnChange = (spouses_birthday) => {
    const sbd = Object.assign({}, this.props.userFamiliesFormData, {
       spouse_birthday: spouses_birthday
    })
    this.props.updateFamilyFormData(sbd)
  }
  handleSpousesNameOnChange = (event) => {

    const sn = Object.assign({}, this.props.userFamiliesFormData, {
      spouse: event.target.value
    })
    this.props.updateFamilyFormData(sn)
  }

  handleKidsNameOnChange = (event) => {
    const kidName = event.target.value
    const kidId = event.target.id

    this.combineKidData("kid_name", kidName, kidId)
  }

  handleKidsBirthdayOnChange = (kidsBirthday, id) => {

    this.combineKidData("kid_birthday", kidsBirthday, id)
  }
  combineKidData = (which, value, id) => {
    console.log("which", which)
    this.props.updateKidsFormData({
      user_id: this.props.members[0].id,
      kidkey: which,
      id: parseInt(id, 10),
      value: value
    })
}

  handleSubmitClick = (event) => {
    event.preventDefault();

    this.props.updateContactInfo(this.props.contactInfoFormData)
    this.props.updateFamily(this.props.userFamiliesFormData)
    this.props.userKidsFormData.map((kid) => {
      this.props.updateKids(kid)
    })

    // this.props.history.push(`/contactinfo`);

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

     this.props.removeKid(id)
  }

render() {

    const Kidcomponent = [];

    for(var i=0; i< this.state.KidCount; i++) {
      Kidcomponent.push(<Panel key={i} id={i}><Kids key={i} id={i} onRemoveClick={this.handleRemoveClick} handleKidsNameOnChange={this.handleKidsNameOnChange} handleKidsBirthdayOnChange={this.handleKidsBirthdayOnChange} /></Panel>)
    }
    console.log("$%", Kidcomponent)


    return (
      <Grid>
      <div>
        <Form onSubmit={this.handleSubmitClick}>

          <UserContactInfo
          handleOnChange={this.handleContactInfoOnChange}
          contactInfoFormData={this.props.contactInfoFormData}

          />

          <Family
            handleUserBirthdayOnChange={this.handleUserBirthdayOnChange}
            handleSpousesBirthdayOnChange={this.handleSpousesBirthdayOnChange}
            handleOnChange={this.handleSpousesNameOnChange}
           />

        <Button onClick={this.addKid}> Add Kid</Button>

          {Kidcomponent}

          <Button bsStyle="success" onClick={this.handleSubmitClick}>Submit</Button>


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
      updateKidsFormData,
      updateContactInfoFormData,
      updateFamilyFormData,
      updateContactInfo,
      updateKids,
      updateFamily,
      removeKid,
    }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo)
