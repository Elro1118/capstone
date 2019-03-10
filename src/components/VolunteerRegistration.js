import React, { Component } from 'react'

class VolunteerRegistration extends Component {
  render() {
    return (
      <div className="volunteer-registration-section">
        <h2>Volunteer Registration for Pasadena Church</h2>
        <form action="">
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Full name" />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone:</label>
            <input type="text" placeholder="111-222-3333" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input type="text" placeholder="myemail@gmail.com" />
          </div>
        </form>
        <button>Save it!</button>
      </div>
    )
  }
}

export default VolunteerRegistration
