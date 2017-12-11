const updateMembers = members => {
  return {
    type: 'GET_MEMBERLIST_SUCCESS',
    members
  }
}


export const getMemberList = (club_id) => {

  return dispatch => {
    return fetch(`http://localhost:3001/api/clubs/${club_id}/users`)
      .then(response => response.json())
      .then(members => dispatch(updateMembers(members)))
      .then(response => console.log("getmemberlist", response))
      .catch(error => console.log("error from getMembers", error))

    }
};
