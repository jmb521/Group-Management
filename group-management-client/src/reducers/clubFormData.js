const initialState = {
  id: "",
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: ""
}

  export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.clubFormData
    case 'RESET_CLUB_FORM':
      return initialState;
    default:
      return state;
  }
}
