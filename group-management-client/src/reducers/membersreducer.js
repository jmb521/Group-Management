export default (state = [], action) => {
  switch(action.type) {
    case 'CREATE_MEMBER_SUCCESS':
      return state.concat(action.members);
    case 'GET_MEMBERLIST_SUCCESS':
      return action.members;
    case 'GET_MEMBERS_SUCCESS':
        return action.members;
    case 'REMOVE_MEMBER':
        return action.members;
    case 'UPDATE_PENDING_MEMBER':
    return state.map( (item) => {
    if(item.id !== action.membership_status.id) {

        return item;
    }
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

     case 'UPDATE_REMOVAL_STATUS':
      return state.map((item) => {
        if(item.id !== action.membership_status.id) {
          return item;
        }
        return {
          ...item,
          ...action
        }
      })

      case 'UPDATE_REINSTATE_STATUS':
       return state.map((item) => {
         if(item.id !== action.membership_status.id) {
           return item;
         }
         return {
           ...item,
           ...action
         }
       })

       case 'RESET_MEMBERSHIP':
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
