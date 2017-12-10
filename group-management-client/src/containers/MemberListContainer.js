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

import MemberRenewal from './MemberRenewal'


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
    console.log("componentDidMount", this.props.getClubs())
  }

//     this.loadUpdatedMembers(value)
//   loadUpdatedMembers = (club_id) => {
//     this.props.getMemberList(club_id).then((members) => {
//       this.setState({
//         members: members
//       })
//     })
//     console.log("state")
//   }

  handleClick = () => {

  }

  handleOnChange = (event) => {
    // console.log(event.target.options[event.target.selectedIndex].id)

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

  }

  render() {
    const WhichToRender = () => {
      // console.log(window.location.pathname === "/membershipmanagement/removedmembers")
      if(window.location.pathname === "/membershipmanagement/removedmembers") {
        console.log("matched pathname")
        return(
          <RemovedMembers
            members={this.state.members}
            memberFormData={this.props.memberFormData}
            onClick={this.handleClick}
            onChange={this.handleOnChange}/>

        )
      } else if (window.location.pathname === "/membershipmanagement/memberrenewal") {
        return(
          <MemberRenewal />
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
    memberFormData: state.memberFormData
  })
}

export default connect(mapStateToProps, {
  getClubs,
  updateMemberFormData,

})(MemberListContainer)
