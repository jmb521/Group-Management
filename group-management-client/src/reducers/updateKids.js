export default(state =[], action) => {
  switch(action.type) {
    case 'UPDATE_KIDS_INFO':
        return state.concat(action.user_kids)

      default:
        return state;
    }
  }
