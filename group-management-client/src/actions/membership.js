import fetch from 'isomorphic-fetch'

const setMembers = members => {
  return {
    type: 'GET_MEMBERS_SUCCESS',

    members

    }

  };
}
//action creator
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
