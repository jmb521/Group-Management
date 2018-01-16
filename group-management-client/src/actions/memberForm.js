// import { hashHistory } from 'react-router'

export const updateMemberFormData = memberFormData => {
  console.log("inside updatememberformdata", memberFormData)
  return {
    type: 'UPDATED_MEMBER',
    memberFormData,
  }
}

export const updateFamilyFormData = familyFormData => {
  return {
    type:"ADD_FAMILY",
    familyFormData
  }
}

export const updateKidsFormData = kidsFormData => {
  return {
    type:"ADD_KID",
    id: kidsFormData.id,
    kidkey: kidsFormData.kidkey,
    value: kidsFormData.value,
    user_id: kidsFormData.user_id
  }
}
export const updateContactInfoFormData = contactInfoFormData => {
  return {
    type: "ADD_CONTACT_INFO",
    contactInfoFormData
  }
}
export const addContactInfo = contact_info => {
  console.log("addContactInfo", contact_info)
  return {
    type: "UPDATE_CONTACT_INFO",
    contact_info
  }
}

export const addUserFamily = user_families => {
  return {
    type: 'UPDATE_FAMILY_INFO',
    user_families
  }
}
export const addUserKid = user_kids => {
  return {
    type: 'UPDATE_KIDS_INFO',
    user_kids
  }
}

export const addMember = members => {

  return {
    type: 'CREATE_MEMBER_SUCCESS',
    members

  }
}
export const removeKid = (id) => {
  console.log("removeKid id", typeof(id))
  return {
    type: 'REMOVE_KID',
    id
  }
}

export const createMember = user => {
  console.log(user)
  return dispatch => {

    return fetch(`http://localhost:3001/api/clubs/${user.club_id}/users`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
     body: JSON.stringify(user)
    })
    .catch(error => console.log(error))
    .then(response => response.json())
    .then(user => {
      console.log("user in createMember", user)
      dispatch(addMember(user))

    })
  }
}

export const updateContactInfo = contact_info => {
  console.log("update contact info", contact_info)
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/${contact_info.user_id}/user_contact_infos/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact_info)
    })
    .catch(error => console.log(error))
    .then(response => response.json())
    .then(contact_info => {
      dispatch(addContactInfo(contact_info))
    })
  }
}

export const updateFamily = family => {
  console.log("inside updateFamily", family)
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/${family.user_id}/user_families/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(family)
    })
    .catch(error => console.log(error))
    .then(response => response.json())
    .then(family => {
      console.log("inside family action creator", family)
      dispatch(addUserFamily(family))
    })

  }
}

export const updateKids = kids => {
  console.log("kids --", kids)
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/${kids.user_id}/user_kids/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(kids)
    })
    .catch(error => console.log(error))
    .then(response => response.json())
    .then(kids => {
      dispatch(addUserKid(kids))
    })
  }
}
