import React, {Component} from 'react';
import {getClubs} from '../actions/club_list'
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import {getMemberList} from '../actions/client.js'
import { updateMemberFormData } from '../actions/memberForm'

class GetClubs extends Component {

  componentDidMount() {
    this.props.getClubs()

  }

  handleOnChange = (event) => {

    let name=""
    let value=""

    name = event.target.name;
    value = event.target.options[event.target.selectedIndex].id

    const currentMemberFormData = Object.assign({}, this.props.memberFormData, {
      [name]: value
    })

    this.props.updateMemberFormData(currentMemberFormData)

    if(window.location.href !== "http://localhost:3000/addmember") {
      this.loadUpdatedMembers(value)
    }

  }


  loadUpdatedMembers = (club_id) => {
    this.props.getMemberList(club_id)
  }

  render() {
      const ShowClubName = () => {
        const result = this.props.clubs.map((m) => {
          if(m.id === parseInt(this.props.memberFormData.club_id, 10)) {
            return (
              m.name
            )
          } else {
            return (
              ""
            )
          }
        })

        return (
          <h3>{result}</h3>
        )
      }
    return(
      <div>
      <ShowClubName />
        <Form>

             <FormGroup controlId="formControlsSelect">
                   <ControlLabel>Select</ControlLabel>
                     <FormControl componentClass="select" placeholder="select" onChange={this.handleOnChange} name="club_id">
                      <option value="test">...</option>
                       {this.props.clubs.map((club, key) => <option name="club_id" id={club.id} key={club.id} value={club.name}>{club.name}</option>)}
                     </FormControl>
              </FormGroup>


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
    memberFormData: state.memberFormData,

  })
}
export default connect(mapStateToProps, mapDispatchToProps)(GetClubs)
