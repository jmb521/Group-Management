import React from 'react';
import '../App.css'
import { Router, Route } from 'react-router';
import MembershipManagement from './MembershipManagement'
import Kids from './Kids'
import {ContactInfo} from './ContactInfo'
import Family from './Family'
import Navigation from './Nav'
import Home from './Home'
import AddMember from './AddMember'
import Club from './Club'
import NavFooter from './NavFooter'
import createBrowserHistory from 'history/createBrowserHistory'
import PendingMembers from './PendingMembers'
import MemberRenewal from './MemberRenewal'
import RemovedMembers from './RemovedMembers'
const history = createBrowserHistory()

// import { synchHistoryWithStore } from 'react-router-redux'
// import store from '../store.js'
// const history = synchHistoryWithStore(browserHistory, store)




class App extends React.Component {



  render() {

    return(

      <div>
      <div>
        <Navigation />

        </div>

        <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/membershipmanagement" render={()=><MembershipManagement />}/>
          <Route exact path="/addmember" component={AddMember} />
          <Route exact path="/addclub" component={Club} />
          <Route exact path="/contactinfo" component={ContactInfo} />
          <Route exact path="/family" component={Family} />
          <Route exact path="/kids" component={Kids} />
          <Route exact path="/membershipmanagement/pendingmembers" component={PendingMembers} />
          <Route exact path="/membershipmanagement/memberrenewal" component={MemberRenewal} />
          <Route exact path="/membershipmanagement/removedmembrers" component={RemovedMembers} />
        </div>
        </Router>
        <NavFooter />
      </div>
    )

  }

}

export default App;
