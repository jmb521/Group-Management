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

const members = [
  {
id: 2,
username: "jmb521",
password: null,
club_id: 1,
user_photo_url: null,
user_status: null,
created_at: "2017-10-09T05:36:19.617Z",
updated_at: "2017-10-09T05:36:19.617Z",
user_kids: [ ],
user_info: {
id: 2,
user_id: 2,
first_name: "Jennifer",
last_name: "Pazos",
address1: null,
address2: null,
city: null,
state: null,
zipcode: null,
created_at: "2017-10-09T05:36:19.621Z",
updated_at: "2017-10-09T05:36:19.621Z"
},
membership_status: {
id: 2,
user_id: 2,
club_id: null,
is_member: "true",
membership_paid: null,
created_at: "2017-10-09T05:36:19.624Z",
updated_at: "2017-10-09T05:36:19.624Z"
}
},
]



class App extends React.Component {

  render() {
    console.log("the members", {members})

    return(

      <div>
      <div>
        <Navigation />

        </div>

        <Router>
        <div>
          <Route exact path="/home" component={Home} />
          <Route exact path="/membership" render={()=><Membership members={members}/>}/>
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
