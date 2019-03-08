import React, { Component } from 'react'

class LocalList extends Component {
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
        <table className="place-list-section">
          <tr>
            <th>Local</th>
            <th>Location</th>
            <th>Detail</th>
          </tr>
          <tr>
            <td>Pasadena Church</td>
            <td>227 70th St S, St Petersburg, FL 33707</td>
            <td>
              <i class="fas fa-info-circle" />
            </td>
          </tr>
          <tr>
            <td>Pasadena Church</td>
            <td>227 70th St S, St Petersburg, FL 33707</td>
            <td>
              <i class="fas fa-info-circle" />
            </td>
          </tr>
          <tr>
            <td>Pasadena Church</td>
            <td>227 70th St S, St Petersburg, FL 33707</td>
            <td>
              <i class="fas fa-info-circle" />
            </td>
          </tr>
          <tr>
            <td>Pasadena Church</td>
            <td>227 70th St S, St Petersburg, FL 33707</td>
            <td>
              <i class="fas fa-info-circle" />
            </td>
          </tr>
          <tr>
            <td>Pasadena Church</td>
            <td>227 70th St S, St Petersburg, FL 33707</td>
            <td>
              <i class="fas fa-info-circle" />
            </td>
          </tr>
        </table>
      </>
    )
  }
}

export default LocalList
