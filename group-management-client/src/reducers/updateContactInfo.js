  const initialState = {
    id: '',
    user_id: '',
    email: '',
    home_phone: '',
    text_message: '',
    preferred_method: '',
  }

export default(state = initialState, action) => {
  console.log("state", state)
  switch(action.type) {
    case 'UPDATE_CONTACT_INFO':
      return action.contact_info

    default:
      return state;
  }
}
