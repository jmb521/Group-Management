export default (state = [], action) => {
  switch(action.type) {
    case 'GET_MEMBERS_SUCCESS':
      return action.members;
    case 'REMOVE_MEMBER':
      return action.members;

    default:
      return state;
  }
}