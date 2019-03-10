import React, { Component } from 'react'

class RegistrationLocal extends Component {
  render() {
    return (
      <div className="local-registration-section">
        <h2>Local Registration</h2>
        <form action="">
          <div className="form-row">
            <label htmlFor="local">Local:</label>
            <input type="text" placeholder="Local name" />
          </div>
          <div className="form-row">
            <label htmlFor="location">Location:</label>
            <input type="text" placeholder="Local address" />
          </div>
          <div className="form-row">
            <label htmlFor="schedule">Schedule:</label>
            <input type="text" placeholder="Local schedule" />
          </div>
        </form>
        <button>Save it!</button>
      </div>
    )
  }
}

export default RegistrationLocal
