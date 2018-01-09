// import { hashHistory } from 'react-router'

export const updateMemberFormData = memberFormData => {
  console.log("inside updatememberformdata", memberFormData)
  return {
    type: 'UPDATED_MEMBER',
    memberFormData,


  }
}

export const addMember = members => {
  console.log("in addMember: ", members)
  return {
    type: 'CREATE_MEMBER_SUCCESS',
    members

  }
}

export const createMember = user => {
  console.log(user)
  return dispatch => {

    return fetch(`http://localhost:3001/api/clubs/${user.club_id}/users`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
     body: JSON.stringify(user)
    })
    .catch(error => console.log(error))
    .then(response => response.json())
    .then(user => {
      console.log("user in createMember", user)
      dispatch(addMember(user))

    })
  }
}

export const updateContactInfo = user => {
  console.log("within the updatecontactinfo", user)
}
