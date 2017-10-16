export default (state = [], action) => {
  switch(action.type) {
    case 'GET_MEMBERS_SUCCESS':
      return action.members;

    default:
      return state;
  }
}
