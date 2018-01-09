const initialState = {
  user_id: "",
  kid_name: "",
  kid_birthday: ""
}

  export default (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_KID':
    console.log("inside the ADD_KID reducer")
      return {
        ...state,
        ...action.userKidsFormData
      }

    default:
      return state;
  }
}
