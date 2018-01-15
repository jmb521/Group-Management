const initialState = {
  user_id: "",
  user_birthday: "",
  spouse: "",
  spouse_birthday: "",
}

  export default (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_FAMILY':
    console.log("inside the ADD_KID reducer")
    return action.familyFormData

    default:
      return state;
  }
}
