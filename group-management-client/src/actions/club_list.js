const setClubs = clubs => {

  return {
    type: 'GET_CLUBS_SUCCESS',
    clubs

  };
}



export const getClubs = () => {
  return dispatch => {
   return fetch("http://localhost:3001/api/clubs")
     .then(response => response.json())
     .then(clubs => dispatch(setClubs(clubs)))
     .catch(error => console.log(error));

    }
  };
