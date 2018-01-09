import React, {Component} from 'react'
import {UserContactInfo} from './UserContactInfo'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import store from '../store.js'
import {Kids} from './Kids'
import {Family} from './Family'
import { Grid, Row, Col, Form, Panel, Button} from 'react-bootstrap'

class ContactInfo extends Component {
  constructor() {
    super()
    this.state = {
      KidCount: 1,
    }

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

render() {

    const Kidcomponent = [];

    for(var i=0; i< this.state.KidCount; i++) {
      Kidcomponent.push(<Panel key={i}><Kids key={i} id={i} onRemoveClick={this.handleRemoveClick} /></Panel>)
    }
    console.log("$%", Kidcomponent)


    return (
      <Grid>
      <div>
        <Form onSubmit={this.handleOnSubmit}>
        <div>
          <UserContactInfo />
        </div>
        <div>
          <Family />
        </div>
        <div>
        <Button onClick={this.addKid}> Add Kid</Button>

          {Kidcomponent}

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

    })
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    })
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo)
