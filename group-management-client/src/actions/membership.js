import fetch from 'isomorphic-fetch'

const setMembers = members => {
  return {
    type: 'GET_MEMBERS_SUCCESS',
    members
  };
}

export const updateMemberStatus = () => {
  
  return {
    type: 'UPDATE_MEMBERSHIP_STATUS',
    payload: {is_member: "not a member"}
  }
}



export const getMembers = () => {
  return dispatch => {
   return fetch("http://localhost:3001/api/clubs/1/users")
     .then(response => response.json())
     .then(members => dispatch(setMembers(members)))
     .catch(error => console.log(error));
    }
  };

export const removeMember = (member) => {
  return dispatch => {
  return fetch(`http://localhost:3001/api/users/${member.id}/membership_statuses/${member.membership_status.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({membership_status: {"is_member": "not a member"}})
    })
    .then(response => response.json())
    .then(user => dispatch(updateMemberStatus({membership_status: {"is_member": "not a member"}})))
    .then(error => console.log(error))
  }
}


//export const removeMember = (user) => {

  // const formData = new FormData();
  // formData.append(user.membership_status.is_member, "not a member")
  // return fetch(`http://localhost:3001/api/clubs/${user.club_id}/users/${user.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({user:formData}),
  //   })
  //   console.log(formData)
  //   .then(response => response.json())
  //   // .then(member_status => debugger )
  //   .then(error => console.log(error))
  // }



function createNewProfile(profile) {
    const formData = new FormData();
    formData.append('first_name', profile.firstName);
    formData.append('last_name', profile.lastName);
    formData.append('email', profile.email);
    return fetch('http://example.com/api/v1/registration', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
}
