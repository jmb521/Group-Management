

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


// export const removeMember = (member_status) => {
//   return dispatch => {
//     return fetch("http://localhost:3001/api/clubs/1/users", {
//       const formData = new FormData();
//       formData.append('is_member')
//       method: "POST",
//
//     })
//     .then(response => response.json())
//     // .then(member_status => debugger )
//     .then(error => console.log(error))
//   }
// }
