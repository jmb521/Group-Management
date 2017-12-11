export default (state = [], action) => {
  switch(action.type) {
    case 'CREATE_MEMBER_SUCCESS':
      return state.concat({members: action.members});
    case 'GET_MEMBERLIST_SUCCESS':
      return action.members;
    case 'GET_MEMBERS_SUCCESS':
        return action.members;
    case 'REMOVE_MEMBER':
        return action.members;

    default:
      return state;

  }
}
