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
// import store from '../store.js'
import {MemberRenewal} from './MemberRenewal'
import membersreducer from '../reducers/membersreducer'


class MemberListContainer extends Component {

  state = {
    members: [],
    clubs: [],
  }
  componentDidMount() {
    // this.props.memberFormData();
    this.props.getClubs();
    // store.subscribe(() => this.forceUpdate());
  }

  loadUpdatedMembers = (club_id) => {
  //  this.props.getMemberList(club_id);

    this.props.getMemberList(club_id)
    console.log("&&", this.props.members)
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
    const filteredMembers = (members, filter) => {
    if(filter === "pending") {
      return members.filter((m)=> m.membership_status.is_member === filter);
    } else if(filter === "current") {
      return members.filter((m) => m.membership_status.is_member === filter)
    } else if(filter === "removed") {
      return members.filter((m)=> m.membership_status.is_member === filter)
    }


    }
    const WhichToRender = () => {
      

      if(window.location.href === "http://localhost:3000/membershipmanagement/removedmembers") {

        return(

          <RemovedMembers
            members={filteredMembers(this.props.members, "removed")}
            memberFormData={this.props.memberFormData}
            onClick={this.handleClick}
            handleOnChange={this.handleOnChange}
            clubs={this.props.clubs} />

        )
      } else if (window.location.href === "http://localhost:3000/membershipmanagement/memberrenewal") {
        return(
          <MemberRenewal
          members={filteredMembers(this.props.members, "current")}
          memberFormData={this.props.memberFormData}
          clubs={this.props.clubs}
          renewOnClick={this.renewOnClick}
          removeOnClick={this.removeOnClick}
          handleOnChange={this.handleOnChange}
          />
        )
      } else if (window.location.href === "http://localhost:3000/membershipmanagement/pendingmembers") {
        return(
          <PendingMembers
          members={filteredMembers(this.props.members, "pending")}
          clubs={this.props.clubs}
          approvePendingMemberOnClick={this.approvePendingMemberOnClick}
          handleOnChange={this.handleOnChange}
          />

        )
      } else {
        return(
          <div>
          </div>
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
  getMemberList,
  updateMemberFormData,
  membersreducer,
})(MemberListContainer)
