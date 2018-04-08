import * as types from './actionTypes'
import sesssionApi from '../apiSessionApi'

export loginSuccess = () => {
  return {
    type: types.LOG_IN_SUCCESS
  }
}

export logInUser = (credentials) => {
  return function(dispatch) {
    return sessionApi.login(credentials)
    .then(response => {
      sessionStorage.setItem('jwt', response.jwt)
      dispatch(loginSuccess())
    }).catch(error => {
      throw(error)
    })
  }
}
