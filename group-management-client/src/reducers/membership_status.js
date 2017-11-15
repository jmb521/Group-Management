export default (state = [], action) => {
  switch(action.type) {
    case: 'UPDATE_MEMBERSHIP_STATUS',
    console.log("action", action.payload)
      return action.payload
    default:
      return state;
  }
}
