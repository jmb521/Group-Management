

const setMembers = members => {
  return {
    type: 'GET_MEMBERS_SUCCESS',
    members
  };
}



export const getMembers = () => {
  return dispatch => {
   return fetch("http://localhost:3001/api/clubs/1/users")
     .then(response => response.json())
     .then(members => dispatch(setMembers(members)))
     .catch(error => console.log(error));
    }
  };


// componentDidMount() {
//   this.props.getMembers()
// }
