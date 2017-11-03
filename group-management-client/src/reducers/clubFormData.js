export default (state = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: ""
}, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.clubFormData

    default:
      return state;
  }
}
