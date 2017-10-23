

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


export const removeMember = () => {
  const formData = new FormData();
  formData.append("is_member", "not a member")
  return fetch("http://localhost:3001/api/clubs/1/users", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    // .then(member_status => debugger )
    .then(error => console.log(error))
  }



function createNewProfile(profile) {
    const formData = new FormData();
    formData.append('first_name', profile.firstName);
    formData.append('last_name', profile.lastName);
    formData.append('email', profile.email);
    return fetch('http://example.com/api/v1/registration', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
}
