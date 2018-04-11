import React, { Component, PropTypes } from 'react'
// import { Grid, Row, Col} from 'react-bootstrap'
// import AuthService from './AuthService';
import TextInput from './TextInput'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as sessionActions from '../actions/sessionActions'
class UserLogin extends Component {
  constructor() {
    super()
    this.state = {
      credentials: {
        email: '', password: ''
      },
      session: false,
    }
    // this.Auth = new AuthService();
  }

  onChange = (event) => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({
      credentials: credentials
    })
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.actions.loginUser(this.state.credentials);
  }

  render() {
    return(
      <div className="Login">
        <form>
            <TextInput
              name="email"
              label="email"
              value={this.state.credentials.email}
              onChange={this.onChange}
              />

              <TextInput
                name="password"
                labe="password"
                type="password"
                value={this.state.credentials.password}
                onChange={this.onChange}
                />

                <input
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onSave}/>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(UserLogin)
