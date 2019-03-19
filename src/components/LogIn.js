import React, { Component } from 'react'
import NavigationHome from './NavigationHome'
class LogIn extends Component {
  render() {
    return (
      <>
        <NavigationHome title="Log In" />
        <div className="form-log-in">
          <h1>Log In</h1>
          <form action="">
            <div className="form-row">
              <input type="text" placeholder="Email address" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Password" />
            </div>
          </form>
          <button>Log In</button>
        </div>
      </>
    )
  }
}

export default LogIn
