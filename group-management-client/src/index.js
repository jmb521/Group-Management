import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
// import Membership from './reducers/membership'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux'


// export let store = createStore(Membership)
// console.log(store.getState());


ReactDOM.render(
// <Provider store = { store }>
  <App />,

// </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
