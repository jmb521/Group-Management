import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import membersreducer from './reducers/membersreducer'
import clubs from './reducers/clubs'
import clubFormData from './reducers/clubFormData'
import memberFormData from './reducers/memberFormData'
import club from './reducers/clubs'
import userKidsFormData from './reducers/userKidsFormData'
import userFamiliesFormData from './reducers/userFamiliesFormData'
import contactInfoFormData from './reducers/contactInfoFormData'
import updateFamily from './reducers/updateFamily'
import updateKids from './reducers/updateKids'
import updateContactInfo from './reducers/updateContactInfo'
import memberAdded from './reducers/memberAdded'
import {persistedState} from './index.js'
// import {routerReducer} from 'react-router-redux'

const reducers = combineReducers({
  members: membersreducer,
  clubFormData: clubFormData,
  clubs: clubs,
  memberFormData: memberFormData,
  club: club,
  userKidsFormData: userKidsFormData,
  userFamiliesFormData: userFamiliesFormData,
  contactInfoFormData: contactInfoFormData,
  family: updateFamily,
  kids: updateKids,
  contact_info: updateContactInfo,
  member_added: memberAdded

  // member: member,

  // routing: routerReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware= [thunk];

export default createStore(
  reducers,
  persistedState,
   composeEnhancers(applyMiddleware(...middleware)));
   // applyMiddleware(...middleware)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
