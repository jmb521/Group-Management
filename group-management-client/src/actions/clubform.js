export const updateClubFormData = clubFormData => {

  return {
    type: 'UPDATED_DATA',
    clubFormData

  }
}
export const createClub = club => {
  debugger
  return dispatch => {
    return fetch("http://localhost:3001/api/clubs", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({club:club})
    })
    .then(response => response.json())
    .then(club => {
      debugger;
    })
    .catch(error => console.log(error))
  }
}
