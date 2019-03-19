import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class NavigationList extends Component {
  render() {
    return (
      <>
        <h4>
          <Link to={`/`}>Home</Link> / <Link to={`/List/1`}> List</Link> /{' '}
          {this.props.title}
        </h4>
      </>
    )
  }
}

export default NavigationList
