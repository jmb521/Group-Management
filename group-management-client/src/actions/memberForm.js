// import { hashHistory } from 'react-router'

export const updateMemberFormData = memberFormData => {
  console.log("inside updatememberformdata", memberFormData)
  return {
    type: 'UPDATED_MEMBER',
    memberFormData,
    

  }
}

export const addMember = members => {
  return {
    type: 'CREATE_MEMBER_DATA',
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

      dispatch(addMember(user))

    })
  }
}
