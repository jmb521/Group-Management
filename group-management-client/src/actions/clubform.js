export const updateClubFormData = clubFormData => {


  return {
    type: 'UPDATED_DATA',
    clubFormData

  }
}

export const addClub = club => {
  return {
    type: 'CREATE_CLUB_SUCCESS',
    club

  }
}

export const createClub = club => {

  return dispatch => {
    return fetch("http://localhost:3001/api/clubs", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
      'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}'
    },
    body: JSON.stringify({club:club})
    })
    .then(response => response.json())
    .then(club => {

      dispatch(addClub(club))

    })
    .catch(error => console.log(error))
  }
}
