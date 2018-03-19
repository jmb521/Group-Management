import React, { Component } from 'react'
import { Grid, Row, Col} from 'react-bootstrap'

class UserLogin extends Component {
  constructor() {
    super()
    // this.state = {
    //
    // }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
        }
    )

  }
  render() {
    return(
      <div className="Login">
      <form>
          <input
              className="form-item"
              placeholder="Username goes here..."
              name="username"
              type="text"
              onChange={this.handleChange}
          />
          <input
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange}
          />
          <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
          />
        </form>
      </div>
    )
  }
}

export default UserLogin
