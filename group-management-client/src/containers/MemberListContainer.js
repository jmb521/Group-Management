//container component to hold state for the remove, pending and member renewal.
//pulls state for all member status.
//allows for filtering of club_id and membership_status
import React, {Component} from 'react';
import {getMemberList} from '../reducers/client.js'
import {RemovedMembers} from './RemovedMembers'
import { connect } from 'react-redux'
import {memberFormData} from '../reducers/memberFormData'
import { updateMemberFormData } from '../actions/memberForm'
import {getClubs} from '../actions/club_list'
import {PendingMembers} from './PendingMembers'

import {MemberRenewal} from './MemberRenewal'


class MemberListContainer extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    members: [
      {
        id: 3,
        firstName: "Jen",
        lastName: "Pazos",
        email: "jmp521@gmail.com",
        membership_status: "current member",
        club_id: 34,
    }
  ],
    clubs: [],
  }
  componentDidMount() {
    // this.props.memberFormData();
    this.props.getClubs();



  }

  loadUpdatedMembers = (club_id) => {

    this.props.getMemberList(club_id).then((members) => {
      console.log("getmembers", members)
      this.setState({
        members: members
      })
    })
    console.log("state")
  }

  handleClick = () => {

  }
  approvePendingMemberOnClick = () => {

  }

  renewOnClick = (e) => {
    e.preventDefault();
    this.setState({
      memberStatus: "renewed for 2017-2018"
    })
  }

  removeOnClick = (e) => {
    e.preventDefault();

    //I think this may need to dispatch an action that would set the state AND
    //update the server with the data.
    this.setState({
      memberStatus: "removed"
    })
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

  render() {
    const WhichToRender = () => {


      if(window.location.pathname === "/membershipmanagement/removedmembers") {
        return(
        <div>
          <RemovedMembers
            members={this.props.members}
            memberFormData={this.props.memberFormData}
            onClick={this.handleClick}
            handleOnChange={this.handleOnChange}
            clubs={this.props.clubs} />
            </div>
        )
      } else if (window.location.pathname === "/membershipmanagement/memberrenewal") {
        return(
          <MemberRenewal
          members={this.state.members}
          memberFormData={this.props.memberFormData}
          clubs={this.props.clubs}
          renewOnClick={this.renewOnClick}
          removeOnClick={this.removeOnClick}
          handleOnChange={this.handleOnChange}
          />
        )
      } else if (window.location.pathname === "/membershipmanagement/pendingmembers") {
        return(
          <PendingMembers
          members={this.state.members}
          clubs={this.props.clubs}
          approvePendingMemberOnClick={this.approvePendingMemberOnClick}
          handleOnChange={this.handleOnChange}
          />

        )
      }

    }

    return(
      <div>
        <WhichToRender />

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

export default connect(mapStateToProps, {
  getClubs,
  updateMemberFormData,

})(MemberListContainer)
