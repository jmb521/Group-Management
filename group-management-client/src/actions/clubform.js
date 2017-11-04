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
export const resetClubForm = () => {
  return {
    type: 'RESET_CLUB_FORM',

  }
}
export const createClub = club => {

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
      console.log(club.id)
      dispatch(addClub(club))
      dispatch(resetClubForm())
    })
    .catch(error => console.log(error))
  }
}
