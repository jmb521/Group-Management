import React, { Component } from 'react';
import '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Membership from './Membership'
import Events from './Events'
import Navigation from './Nav'
import Home from './Home'
import AddMember from './Members/AddMember'
import CreateEvent from './Events/CreateEvent'
import ManageInvites from './Events/ManageInvites'



class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      members: [],
    };

  }
  componentWillMount() {
      this.fetchMembers()

}

fetchMembers = () => {
  fetch("http://localhost:3001/api/membership_statuses")
   .then(response => response.json())
   .then(members => this.setState({ members: members }));
}
  render() {

    return(

      <div>
        <Navigation />
        <Membership />
        <Router>
        <div>
          <Route exact path="/home" component={Home} />
          <Route exact path="/membership" component={Membership} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/addmember" component={AddMember} />
          <Route exact path="/createevent" component={CreateEvent} />
          <Route exact path="/manageinvites" component={ManageInvites} />
        </div>
        </Router>

      </div>
    )

  }

}

export default App;
