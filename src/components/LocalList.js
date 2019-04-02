import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavigationHome from './NavigationHome'
class LocalList extends Component {
  render() {
    return (
      <>
        <NavigationHome title="List" />
        <h1>Local List</h1>

        <div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className="local-list"> 
         <table className="table table-responsive">
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
        </div> */}
      </>
    )
  }
}

export default LocalList
