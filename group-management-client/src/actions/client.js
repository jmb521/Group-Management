//
// static requestHeaders() {
//     return {}
//   }

const updateMembers = (members, club_id) => {
  return {
    type: 'GET_MEMBERLIST_SUCCESS',
    members,

  }
}


export const getMemberList = (club_id) => {

  return dispatch => {
    return fetch(`http://localhost:3001/api/clubs/${club_id}/users`, {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}',
      }, })
      .then(response => response.json())
      .then(members => dispatch(updateMembers(members, club_id)))
      .catch(error => console.log("error from getMembers", error))

    }
};
