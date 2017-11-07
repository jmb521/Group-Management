export default (state = [], action) => {
  switch(action.type) {
    case 'CREATE_MEMBER_SUCCESS':
      return state.concat({user: action.member});
    default:
      return state;

  }
}
