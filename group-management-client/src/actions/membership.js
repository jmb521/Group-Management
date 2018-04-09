import fetch from 'isomorphic-fetch'


const setMembers = members => {
  return {
    type: 'GET_MEMBERS_SUCCESS',

    members

    }

  };


export const updateMemberStatus = users => {

  return {
    type: 'UPDATE_MEMBERSHIP_STATUS',

  }
}
export const updatependingmember = (membership_status) => {

    return {
      type: 'UPDATE_PENDING_MEMBER',
      membership_status: membership_status,

  }
}
export const updateRenewalStatus = (membership_status) => {
  return {
    type: 'UPDATE_RENEWAL_STATUS',
    membership_status: membership_status,
  }
}

export const updateRemovalStatus = (membership_status) => {
  return {
    type: 'UPDATE_REMOVAL_STATUS',
    membership_status: membership_status,
  }
}
export const updateReinstateStatus = (membership_status) => {
  return {
    type: 'UPDATE_REINSTATE_STATUS',
    membership_status: membership_status,
  }
}
export const resetMembership = (membership_status) => {
  return {
    type: 'RESET_MEMBERSHIP',
    membership_status: membership_status,
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
        'Content-Type': 'application/json',
        'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}'
      },
      body: JSON.stringify({membership_status: {"is_member": "not a member"}})
    })
    .then(response => response.json())
    .then(user => dispatch(updateMemberStatus(user)))
    .then(error => console.log(error))
  }
}
 export const updatePendingStatus = (membershipStatusId, id) => {
   return (dispatch) => {
     return fetch(`http://localhost:3001/api/users/${id}/membership_statuses/${membershipStatusId}`, {
       method: "PUT",
       headers: {
         'Content-Type': 'application/json',
         'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}'
       },
       body: JSON.stringify({"is_member": "current"})
     })
     .then(response => response.json())
     .then(user => dispatch(updatependingmember(user)))
     .catch(error => console.log(error))
   }

 }

 export const updaterenewalstatus = (membershipStatusId, id) => {
   return (dispatch) => {
     return fetch(`http://localhost:3001/api/users/${id}/membership_statuses/${membershipStatusId}`, {
       method: "PUT",
       headers: {
         'Content-Type': 'application/json',
         'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}'
       },
       body: JSON.stringify({"is_member": "current", "membership_paid": "true", "updated_at": Date.now()})
     })
     .then(response => response.json())
     .then(user => dispatch(updateRenewalStatus(user)))
     .catch(error => console.log(error))
   }
 }

 export const updateremovalstatus = (membershipStatusId, id) => {
   return (dispatch) => {
     return fetch(`http://localhost:3001/api/users/${id}/membership_statuses/${membershipStatusId}`, {
       method: "PUT",
       headers: {
         'Content-Type': 'application/json',
         'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}'
       },
       body: JSON.stringify({"is_member": "removed"})
     })
     .then(response => response.json())
     .then(user => dispatch(updateRemovalStatus(user)))
     .catch(error => console.log(error))
   }
 }
 export const updatereinstatestatus = (membershipStatusId, id) => {
   return (dispatch) => {
     return fetch(`http://localhost:3001/api/users/${id}/membership_statuses/${membershipStatusId}`, {
       method: "PUT",
       headers: {
         'Content-Type': 'application/json',
         'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}'
       },
       body: JSON.stringify({"is_member": "current"})
     })
     .then(response => response.json())
     .then(user => dispatch(updateReinstateStatus(user)))
     .catch(error => console.log(error))
   }
 }

 export const resetmembership = (id) => {

   return(dispatch) => {
     return fetch(`http://localhost:3001/api/users/${id}/membership_statuses/${id}`, {
       method: "PUT",
       headers: {
         'Content-Type': 'application/json',
         'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}'
       },
       body: JSON.stringify({"membership_paid": "false"})
     })
     .then(response => response.json())
     .then(members => dispatch(resetMembership(members)))
     .catch(error => console.log(error))
   }
 }
