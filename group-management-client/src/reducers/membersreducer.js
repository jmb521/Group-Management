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
    case 'UPDATE_PENDING_MEMBER':
      console.log("the state in the reducer: ", state)
        const updatedMembers = state.map((m) => {
          if(m.id === action.membership_status.id) {
            m.membership_status = action.membership_status;
          }
          return {
            ...state,
            updatedMembers
          }

        });
        console.log("state after changes: ", state)
        

    default:
      return state;

  }
}
