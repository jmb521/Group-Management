import React from 'react';
import '../App.css'
import { connect } from 'react-redux'
import {Redirect } from 'react-router';
import MembershipManagement from './MembershipManagement'
import {Kids} from './Kids'
import ContactInfo from './ContactInfo'
import {Family} from './Family'
import Navigation from './Nav'
import Home from './Home'

import Club from './Club'
import PendingMembers from './PendingMembers'
import MemberRenewal from './MemberRenewal'
import RemovedMembers from './RemovedMembers'
import CurrentMembers from './CurrentMembers'
import UserLogin from './UserLogin'
import Newuser from './NewUser'
import ClubLogin from './ClubLogin'



import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom'




// import { synchHistoryWithStore } from 'react-router-redux'
// const history = synchHistoryWithStore(createBrowserHistory(), store)


class App extends React.Component {

  render() {

    const AuthenticatedRoute = ({component: Component, authenticated, ...rest}) => {


      return (
        <Route
          {...rest}
          render={(props) => authenticated === true
              ? <Component {...props} {...rest} />
              : <Redirect to='/addmember' />} />
      )
    }


    return(

      <div>
      <div>

        </div>

        <Router>
        <div>
        <Navigation />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/" component={Home} />
          <Route exact path="/clublogin" component={ClubLogin} />
          <Route exact path="/newuser" component={Newuser} />

          <AuthenticatedRoute
            exact path="/contactinfo"
            component={ContactInfo}
            authenticated={this.props.member_added}
          />


          <Route exact path="/family" component={Family} />
          <Route exact path="/kids" component={Kids}/>


          <Route exact path="/membershipmanagement" component={MembershipManagement} onEnter={requireAuth}/>


          <Route exact path="/membershipmanagement/pendingmembers" component={PendingMembers} onEnter={requireAuth}/>
          <Route exact path="/membershipmanagement/memberrenewal" component={MemberRenewal} onEnter={requireAuth}/>
          <Route exact path="/membershipmanagement/removedmembers" component={RemovedMembers} onEnter={requireAuth}/>
          <Route exact path="/membershipmanagement/currentmembers" component={CurrentMembers} onEnter={requireAuth}/>


        </div>
        </Router>

      </div>
    )
    function requireAuth (nextState, replace){
      if(!sessionStorage.jwt) {
        replace({
          pathname: '/login',
          state: {
            nextPathname: nextState.location.pathname
          }
        })
      }
    }
  }
}

const mapStateToProps = state => {
  return ({
    member_added: state.member_added,
    members: state.members,
  })
}

export default connect(mapStateToProps)(App);
