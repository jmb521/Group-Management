export default(state = false, action) => {
  switch(action.type) {
    case 'MEMBER_ADDED':
      return action.memberAdded
    default:
      return state;
  }
}
