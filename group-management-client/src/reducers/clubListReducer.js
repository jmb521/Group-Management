export default (state = [], action) => {
  switch(action.type) {
    case 'GET_CLUBS_SUCCESS':
      return action.clubs

    default:
      return state;
  }
}
