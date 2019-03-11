import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class LocalDetail extends Component {
  render() {
    return (
      <>
        <h4>
          <Link to={`/`}>Home</Link> / Local Detail
        </h4>
        <div className="main-section">
          <div className="detail-volunteer">
            <div className="detail-section">
              <h2>Detail</h2>
              <label htmlFor="local">Local: Pasadena Church</label>
              <label htmlFor="location">
                Location: 227 70th St S, St Petersburg, FL 33707
              </label>
              <label htmlFor="schedule">
                Schedule: Tuesday at 10:00am to 12:00m
              </label>
            </div>
            <div className="volunteer-list">
              <h2>Volunteers</h2>
              <img id="1" src="/images/Marlenes.jpg" alt="Marlene" />
              <img id="2" src="./images/Teresas.jpg" alt="Teresa" />
              <img id="3" src="../images/Silvanas.jpg" alt="Silvana" />
            </div>
          </div>
          <div className="comment-list">
            <h2>Comments</h2>
            <ul>
              <li>
                Maritza: Las clases son gratis, las profesoras son un amor y
                siempre estan compartiendo snacks con los alumnos.
              </li>
              <li>
                Odoris: Me encanta este lugar porque las pesonas que enseñan
                aquí son amables y acojedores. Además de hay cafe gratis todos
                los refrigerios.
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default LocalDetail
