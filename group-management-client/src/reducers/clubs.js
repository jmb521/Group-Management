export default (state = [], action) => {
  switch(action.type) {
    case 'CREATE_CLUB_SUCCESS':
      return state.concat(action.club);
    default:
      return state;

  }
}
