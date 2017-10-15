import React from 'react';
import '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Membership from './Members/Membership'
import Events from './Events'
import Navigation from './Nav'
import Home from './Home'
import AddMember from './Members/AddMember'
import CreateEvent from './Events/CreateEvent'
import ManageInvites from './Events/ManageInvites'




class App extends React.Component {
  constructor() {
    super();

    this.state = {
      members: []
    };

  }
  componentDidMount() {
      this.fetchMembers()
}

fetchMembers = () => {

  fetch("http://localhost:3001/api/clubs/1/users")
   .then(response => response.json())
   .then(members => this.setState({ members }))
}

  render() {
    console.log("the members", this.state.members)

    return(

      <div>
      <div>
        <Navigation />

        </div>

        <Router>
        <div>
          <Route exact path="/home" component={Home} />
          <Route exact path="/membership" render={()=><Membership members={this.state.members}/>}/>
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
