const initialState = {
user_id: '',
email: '',
home_phone: '',
text_message: 'false',
preferred_method: '',
}

  export default (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_CONTACT_INFO':
      return action.contactInfoFormData
    default:
      return state;
  }
}
