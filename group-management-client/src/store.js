import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import members from './reducers/MembershipReducer'
import clubs from './reducers/clubListReducer'
import clubFormData from './reducers/clubFormData'
import memberFormData from './reducers/memberFormData'
import club from './reducers/clubs'
import member from './reducers/members'
// import {routerReducer} from 'react-router-redux'

const reducers = combineReducers({
  members: members,
  clubFormData: clubFormData,
  clubs: clubs,
  memberFormData: memberFormData,
  club: club,
  member: member,
  // routing: routerReducer
});

const middleware= [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
