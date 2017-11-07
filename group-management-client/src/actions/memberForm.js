export const updateMemberFormData = memberFormData => {

  return {
    type: 'UPDATED_MEMBER',
    memberFormData

  }
}

export const addMember = member => {
  return {
    type: 'CREATE_MEMBER_DATA',
    member

  }
}

export const createMember = user => {
  return dispatch => {
    console.log(user)
    return fetch(`http://localhost:3001/api/clubs/${user.club_id}/users`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user: user})
    })
    .then(response => response.json())
    .then(user => {
      console.log(user.id)
      dispatch(addMember(user))

    })
    .catch(error => console.log(error))
  }
}
