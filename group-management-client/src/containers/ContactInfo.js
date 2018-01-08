import React, {Component} from 'react'
import {UserContactInfo} from './UserContactInfo'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import store from '../store.js'
import {Kids} from './Kids'
import {Family} from './Family'

class ContactInfo extends Component {
  //use the member id from the newly created member

  render() {

    return (

      <div>
        <div>
          <UserContactInfo />
        </div>
        <div>
          <Family />
        </div>
        <div>
          <Kids />
        </div>

      </div>

    )
  }
  }
  const mapStateToProps = state => {
    return ({
      members: state.members,

    })
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    })
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo)
