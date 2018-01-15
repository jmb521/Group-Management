

  export default (state = [], action) => {

  switch(action.type) {
    case 'ADD_KID':
    console.log("action", action)
    if (state[action.id] !== undefined) {

      return state.map((data, index) => {
        if(index !== action.id) {
          console.log("doesn't match", typeof(action.id))
          return data
        }
        return {
          ...data,
          ...{[action.kidkey]: action.value}
        }
      })
    } else {
      let newArray = state.slice()
      newArray.splice(action.id, 0, {[action.kidkey]: action.value})
      return newArray;
    }

    case 'REMOVE_KID':
     return state.filter( (data, index) => index !== action.id);
    default:
      return state;
  }
}
