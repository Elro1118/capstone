import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavigationHome from './NavigationHome'
class LocalList extends Component {
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
        <NavigationHome title="List" />
        <h1>Local List</h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Local</th>
                <th>Location</th>
                <th>Volunteer</th>
                <th>Comment</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pasadena Church</td>
                <td>227 70th St S, St Petersburg, FL 33707</td>
                <td>
                  <Link to={`Volunteer/1`}>Add</Link>
                </td>
                <td>
                  <Link to={`Comment/1`}>Add</Link>
                </td>
                <td>
                  <Link to={`Detail/1`}>
                    <i className="fas fa-info-circle" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Pasadena Church</td>
                <td>227 70th St S, St Petersburg, FL 33707</td>
                <td>
                  <Link to={`Volunteer/1`}>Add</Link>
                </td>
                <td>
                  <Link to={`Comment/1`}>Add</Link>
                </td>
                <td>
                  <Link to={`Detail/1`}>
                    <i className="fas fa-info-circle" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Pasadena Church</td>
                <td>227 70th St S, St Petersburg, FL 33707</td>
                <td>
                  <Link to={`Volunteer/1`}>Add</Link>
                </td>
                <td>
                  <Link to={`Comment/1`}>Add</Link>
                </td>
                <td>
                  <Link to={`Detail/1`}>
                    <i className="fas fa-info-circle" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Pasadena Church</td>
                <td>227 70th St S, St Petersburg, FL 33707</td>
                <td>
                  <Link to={`Volunteer/1`}>Add</Link>
                </td>
                <td>
                  <Link to={`Comment/1`}>Add</Link>
                </td>
                <td>
                  <Link to={`Detail/1`}>
                    <i className="fas fa-info-circle" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Pasadena Church</td>
                <td>227 70th St S, St Petersburg, FL 33707</td>
                <td>
                  <Link to={`Volunteer/1`}>Add</Link>
                </td>
                <td>
                  <Link to={`Comment/1`}>Add</Link>
                </td>
                <td>
                  <Link to={`Detail/1`}>
                    <i className="fas fa-info-circle" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default LocalList
