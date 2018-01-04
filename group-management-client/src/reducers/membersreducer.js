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
    return state.map( (item) => {
    if(item.id !== action.membership_status.id) {
        // This isn't the item we care about - keep it as-is
        return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
        ...item,
        ...action
    };

  })
    case 'UPDATE_RENEWAL_STATUS':
     return state.map((item) => {
       if(item.id !== action.membership_status.id) {
         return item;
       }
       return {
         ...item,
         ...action
       }
     })



    default:
      return state;

  }
}
