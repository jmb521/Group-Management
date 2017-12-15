import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import membersreducer from './reducers/membersreducer'
import clubs from './reducers/clubs'
import clubFormData from './reducers/clubFormData'
import memberFormData from './reducers/memberFormData'
import club from './reducers/clubs'
import pendingmembercount from './reducers/membershipdashboardreducer'
// import member from './reducers/members'

// import {routerReducer} from 'react-router-redux'

const reducers = combineReducers({
  members: membersreducer,
  clubFormData: clubFormData,
  clubs: clubs,
  memberFormData: memberFormData,
  club: club,
  pendingmembercount: pendingmembercount,
  
  // member: member,

  // routing: routerReducer
});

const middleware= [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
