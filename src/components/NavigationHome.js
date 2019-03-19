import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class NavigationHome extends Component {
  render() {
    return (
      <>
        <h4>
          <Link to={`/`}>Home</Link> / {this.props.title}
        </h4>
      </>
    )
  }
}

export default NavigationHome
