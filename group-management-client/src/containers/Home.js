import React, { Component } from 'react';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();

class Home extends Component {

  handleLogout = () => {
    Auth.logout()
    this.props.history.replace('/login')
  }

  render() {

    return (
      <div className="main">
      <div className="App">
      <div className="App-header">
          // <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome {this.props.user.username}</h2>
      </div>
      <p className="App-intro">
          <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
      </p>
      </div>
        <div className="title">
          <h2 className="card-3">Group Management</h2>
          <h4 className="card-3">A great way to organize</h4>
        </div>
        <div className="section1">

        </div>


      </div>
    )
  }
}
export default withAuth(Home)
