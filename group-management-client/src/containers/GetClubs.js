import React, {Component} from 'react';
import {getClubs} from '../actions/club_list'
import { Form, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import store from '../store.js'
import {getMemberList} from '../reducers/client.js'
import { updateMemberFormData } from '../actions/memberForm'

class GetClubs extends Component {
  componentDidMount() {
    this.props.getClubs()
  }
  handleOnChange = (event) => {


    let name=""
    let value=""
    if(event.target.name === "club_id") {
      name = event.target.name;
      value = event.target.options[event.target.selectedIndex].id
      

    } else {

       name = event.target.name;
       value = event.target.value;

    }

    const currentMemberFormData = Object.assign({}, this.props.memberFormData, {
      [name]: value
    })

    this.props.updateMemberFormData(currentMemberFormData)
    this.loadUpdatedMembers(value)
  }

  loadUpdatedMembers = (club_id) => {
    this.props.getMemberList(club_id)
  }

  render() {

    return(
      <div>

        <Form>
          <Row>
           <Col xs={12} md={4}>
             <FormGroup controlId="formControlsSelect">
                   <ControlLabel>Select</ControlLabel>
                     <FormControl componentClass="select" placeholder="select" onChange={this.handleOnChange} name="club_id">
                      <option value="test">...</option>
                       {this.props.clubs.map((club, key) => <option name="club_id" id={club.id} key={club.id}>{club.name}</option>)}
                     </FormControl>
              </FormGroup>
          </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getClubs,
    getMemberList,
    updateMemberFormData,
  }, dispatch)
}

const mapStateToProps = (state) => {
  return({
    clubs: state.clubs,
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(GetClubs)
