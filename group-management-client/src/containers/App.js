import React from 'react';
import '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Membership from './Membership'

import Navigation from './Nav'
import Home from './Home'
import AddMember from './AddMember'
import Club from './Club'





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
          <Route exact path="/addmember" component={AddMember} />
          <Route exact path="/addclub" component={Club} />

        </div>
        </Router>

      </div>
    )

  }

}

export default App;
