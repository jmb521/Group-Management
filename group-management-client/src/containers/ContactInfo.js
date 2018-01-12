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

  kidData = () => {

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

    console.log("addUserToContact: ", this.addUserToContact(fD))

      this.props.updateContactInfoFormData(this.addUserToContact(fD))
    // const kidsWithDates = () => {
    //   const kidBirthday = document.getElementById("kid_birthday")
    //   return (Object.assign({}, fD[1], {
    //     "kid_birthday": kidBirthday,
    //     "user_id": this.props.members[0].id
    //   }))
    // }
    //   console.log("###", this.kidsWithDates)
    //   // this.props.updateKidsFormData(this.kidsWithDates)

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
       spouses_birthday: spouses_birthday
    })
    this.props.updateFamilyFormData(sbd)
  }
  handleSpousesNameOnChange = (event) => {

    const sn = Object.assign({}, this.props.userFamiliesFormData, {
      spouses_name: event.target.value
    })
    this.props.updateFamilyFormData(sn)
  }

  handleSubmitClick = (event) => {

    event.preventDefault();
    this.props.updateContactInfo(this.props.contactInfoFormData)

    this.props.updateFamily(this.props.userFamiliesFormData)
    this.props.updateKids(this.props.kidsFormData)
    // this.props.createMember(this.props.memberFormData);
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
          contactInfoFormData={this.props.contactInfoFormData}

          />
        </div>
        <div>
          <Family
            handleUserBirthdayOnChange={this.handleUserBirthdayOnChange}
            handleSpousesBirthdayOnChange={this.handleSpousesBirthdayOnChange}
            handleOnChange={this.handleSpousesNameOnChange}
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
      updateKidsFormData,
      updateContactInfoFormData,
      updateFamilyFormData,
      updateContactInfo,
      updateKids,
      updateFamily,
    }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo)
