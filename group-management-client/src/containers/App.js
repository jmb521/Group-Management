import React from 'react';
import '../App.css'
import { connect } from 'react-redux'
import { Router, Route, Redirect } from 'react-router';
import {MembershipManagement} from './MembershipManagement'
import {Kids} from './Kids'
import ContactInfo from './ContactInfo'
import {Family} from './Family'
import Navigation from './Nav'
import Home from './Home'
import AddMember from './AddMember'
import Club from './Club'
import createBrowserHistory from 'history/createBrowserHistory'
import {PendingMembers} from './PendingMembers'
import {MemberRenewal} from './MemberRenewal'
import {RemovedMembers} from './RemovedMembers'
import {CurrentMembers} from './CurrentMembers'
import MemberListContainer from './MemberListContainer'

import store from '../store.js'
const history = createBrowserHistory()

// import { synchHistoryWithStore } from 'react-router-redux'
// const history = synchHistoryWithStore(browserHistory, store)


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
        <Navigation />

        </div>

        <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />


          <Route exact path="/addmember" component={AddMember} />
          // <Route exact path="/contactinfo" component={ContactInfo} />
          <AuthenticatedRoute
            exact path="/contactinfo"
            component={ContactInfo}
            authenticated={this.props.member_added}
          />

          <Route exact path="/addclub" component={Club} />
          <Route exact path="/family" component={Family} />
          <Route exact path="/kids" component={Kids} />
          <MemberListContainer>
          <Route exact path="/membershipmanagement" component={MembershipManagement} />

          <Route exact path="/membershipmanagement/pendingmembers" component={PendingMembers} />
          <Route exact path="/membershipmanagement/memberrenewal" component={MemberRenewal} />
          <Route exact path="/membershipmanagement/removedmembers" component={RemovedMembers} />
          <Route exact path="/membershipmanagement/currentmembers" component={CurrentMembers} />
          </MemberListContainer>



        </div>
        </Router>

      </div>
    )

  }

}

const mapStateToProps = state => {
  return ({
    member_added: state.member_added,
  })
}

export default connect(mapStateToProps)(App);
