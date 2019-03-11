import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class CommentRegistration extends Component {
  render() {
    return (
      <>
        <h4>
          <Link to={`/`}>Home</Link> / Comment Registration
        </h4>
        <div className="comment-registration-section">
          <h2>Comment Registration for Pasadena Church</h2>
          <form action="">
            <div className="form-row">
              <label htmlFor="comment">Comment:</label>
              <input type="text" placeholder="A penny for your thoughts..." />
            </div>
          </form>
          <button>Save it!</button>
        </div>
      </>
    )
  }
}

export default CommentRegistration
