import React from 'react';
import '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Membership from './Membership'
import Events from './Events'
import Navigation from './Nav'
import Home from './Home'
import AddMember from './AddMember'
import CreateEvent from './Events/CreateEvent'
import ManageInvites from './Events/ManageInvites'




class App extends React.Component {



  render() {

    return(

      <div>
      <div>
        <Navigation />

        </div>

        <Router>
        <div>
          <Route exact path="/home" component={Home} />
          <Route exact path="/membership" render={()=><Membership />}/>
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
