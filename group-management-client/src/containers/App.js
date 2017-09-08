import React, { Component } from 'react';
import '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Membership from './Membership'
import Events from './Events'
import Navigation from './Nav'
import Home from './Home'

class App extends Component{
  render() {

    return(

      <div>
        <Navigation />
        <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/membership" component={Membership} />
          <Route exact path="/events" component={Events} />
        </div>
        </Router>
      </div>
    )

  }

}

export default App;
