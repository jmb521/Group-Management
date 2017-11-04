import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import members from './reducers/MembershipReducer'
import clubs from './reducers/clubListReducer'
import clubFormData from './reducers/clubFormData'


const reducers = combineReducers({
  members: members,
  clubFormData: clubFormData,
  clubs: clubs
});

const middleware= [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
