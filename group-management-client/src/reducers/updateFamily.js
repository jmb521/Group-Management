const initialState = {
  user_id: "",
  user_birthday: "",
  spouse: "",
  spouse_birthday: "",
}

export default(state = initialState, action) => {

switch(action.type) {
  case 'UPDATE_FAMILY_INFO':
    return action.user_families

  default:
    return state;
}
}
