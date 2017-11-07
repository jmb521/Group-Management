const initialState = {
  club_id: "",
  first_name: "",
  last_name: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zipcode: ""
}

  export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_MEMBER':
      return action.memberFormData

    default:
      return state;
  }
}
