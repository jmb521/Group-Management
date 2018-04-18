import React, {Component} from 'react'
import {UserContactInfo} from './UserContactInfo'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import {Kids} from './Kids'
import {Family} from './Family'
import { Grid, Form, Panel, Button} from 'react-bootstrap'
import {updateContactInfoFormData} from '../actions/memberForm'
import {updateFamilyFormData} from '../actions/memberForm'
import {updateKidsFormData} from '../actions/memberForm'
import {updateContactInfo} from '../actions/memberForm'
import {updateKids} from '../actions/memberForm'
import {updateFamily} from '../actions/memberForm'
import {removeKid} from '../actions/memberForm'

var moment = require('moment');
class ContactInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      KidCount: 1,
      emailValid: false,
      phoneValid: false,
      userBirthdayValid: false,
      preferredMethodValid: false,
      spouseNameValid: false,
      spouseBirthdayValid: false,
      kidNameValid: false,
      kidBirthdayValid: false,
      formErrors: {
        email: "",
        home_phone: "",
        preferred_method: "",
        user_birthday: "",
        spouses_name: "",
        spouses_birthday: "",
        kid_birthday: "",
        kid_name: "",
      }

    }

  }
  validateInput = (name, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let phoneValid = this.state.phoneValid;
    let userBirthdayValid = this.state.userBirthdayValid;
    let preferredMethodValid = this.state.preferredMethodValid;
    let spouseNameValid = this.state.spouseNameValid;
    let spouseBirthdayValid = this.state.spouseBirthdayValid;
    let kidNameValid = this.state.kidNameValid;
    let kidBirthdayValid = this.state.kidBirthdayValid;
    let emailValid = this.state.emailValid;


    switch(name) {
      case 'email':
        emailValid = value.match(/[\w\d._%+-]+@[\w\d.-]+.[\w]{2,4}/)
        fieldValidationErrors.email = emailValid
        break;
      case 'home_phone':
        phoneValid = value.match(/^[\d]{10}$/)
        fieldValidationErrors.home_phone = phoneValid
        break;
      case 'preferred_method':
        preferredMethodValid = value !== "..."
        fieldValidationErrors.preferred_method = preferredMethodValid
        break;
      case 'user_birthday':
        userBirthdayValid = moment(value).isValid()
        fieldValidationErrors.user_birthday = userBirthdayValid
        break;
      case 'spouses_name':
        spouseNameValid = value.match(/[a-zA-Z]+/)
        fieldValidationErrors.spouses_name = spouseNameValid
        break;
      case 'spouses_birthday':
        spouseBirthdayValid = moment(value).isValid()
        fieldValidationErrors.spouses_birthday = spouseBirthdayValid
        break;
      case 'kid_name':
        kidNameValid = value.match(/[a-zA-Z]+/)
        fieldValidationErrors.kid_name = kidNameValid
        break;
      case 'kid_birthday':
        kidBirthdayValid = moment(value).isValid()
        fieldValidationErrors.kid_birthday = kidBirthdayValid
        break;
      default:
        break;
    }
    this.setState({
      formErors: fieldValidationErrors,
      emailValid: emailValid,
      phoneValid: phoneValid,
      preferredMethodValid: preferredMethodValid,
      userBirthdayValid: userBirthdayValid,
      spouseNameValid: spouseNameValid,
      spouseBirthdayValid: spouseBirthdayValid,
      kidNameValid: kidNameValid,
      kidBirthdayValid: kidBirthdayValid,
    }, this.validateForm)
  }
  validateForm = () => {
    this.setState({
      formValid: this.state.emailValid && this.state.phoneValid && this.state.preferredMethodValid && this.state.userBirthdayValid && this.state.spouseNameValid && this.state.spouseBirthdayValid && this.state.kidNameValid && this.state.kidBirthdayValid
    })

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
    this.validateInput(name, value)

    const currentContactInfoFormData = Object.assign({}, this.props.contactInfoFormData, {
      [name]: value
    })

    return currentContactInfoFormData
  }

  addUserToContact = (fD) => {

    const updatedContactInfo = Object.assign({}, fD, {
        user_id: this.props.members[0].id
    })

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

    this.validateInput("user_birthday", usr_bday)
    this.props.updateFamilyFormData(ubd)
  }
  handleSpousesBirthdayOnChange = (spouses_birthday) => {
    const sbd = Object.assign({}, this.props.userFamiliesFormData, {
       spouse_birthday: spouses_birthday
    })
    this.validateInput("spouses_birthday", spouses_birthday)
    this.props.updateFamilyFormData(sbd)
  }
  handleSpousesNameOnChange = (event) => {

    const sn = Object.assign({}, this.props.userFamiliesFormData, {
      spouse: event.target.value
    })
    this.validateInput("spouses_name", event.target.value)
    this.props.updateFamilyFormData(sn)
  }

  handleKidsNameOnChange = (event) => {
    const kidName = event.target.value
    const kidId = event.target.id
    this.validateInput("kid_name", kidName)
    this.combineKidData("kid_name", kidName, kidId)
  }

  handleKidsBirthdayOnChange = (kidsBirthday, id) => {
    this.validateInput("kid_birthday", kidsBirthday)
    this.combineKidData("kid_birthday", kidsBirthday, id)
  }
  combineKidData = (which, value, id) => {
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
      return this.props.updateKids(kid)
    })

    // this.props.history.push(`/membershipmanagement`);
    //
    window.location = "/membershipmanagement"

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
      Kidcomponent.push(<Panel key={i} id={i}><Kids key={i} id={i} formErrors={this.state.formErrors} onRemoveClick={this.handleRemoveClick} handleKidsNameOnChange={this.handleKidsNameOnChange} handleKidsBirthdayOnChange={this.handleKidsBirthdayOnChange} /></Panel>)
    }

    return (
      <Grid>
      <div>
        <Form onSubmit={this.handleSubmitClick}>

          <UserContactInfo
          handleOnChange={this.handleContactInfoOnChange}
          contactInfoFormData={this.props.contactInfoFormData}
          formErrors={this.state.formErrors}
          />

          <Family
            handleUserBirthdayOnChange={this.handleUserBirthdayOnChange}
            handleSpousesBirthdayOnChange={this.handleSpousesBirthdayOnChange}
            handleOnChange={this.handleSpousesNameOnChange}
            formErrors={this.state.formErrors}
           />

        <Button onClick={this.addKid}> Add Kid</Button>

          {Kidcomponent}

          <Button bsStyle="success" onClick={this.handleSubmitClick} disabled={!this.state.formValid}>Submit</Button>


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
      member_added: state.member_added,
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
