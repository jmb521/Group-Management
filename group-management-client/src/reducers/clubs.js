export default (state = [], action) => {
  switch(action.type) {
    case 'CREATE_CLUB_SUCCESS':
      return state.concat(action.club);
    case 'GET_CLUBS_SUCCESS':
      return action.clubs
    default:
      return state;

  }
}
