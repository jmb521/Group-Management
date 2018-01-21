const initialState = {
  user_id: "",
  user_birthday: "",
  spouse: "",
  spouse_birthday: "",
}

  export default (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_FAMILY':
    
    return action.familyFormData

    default:
      return state;
  }
}
