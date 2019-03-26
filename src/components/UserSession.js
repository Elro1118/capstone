import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import homePicture from '../images/homePicture.jpg'

class UserSession extends Component {
  state = {
    selectedLanguage: ''
  }

  getCurrentLanguageFromHtml = () => {
    return window.google.translate.TranslateElement.getInstance().c
  }

  getCurrentLanguage = () => {
    this.setState({
      selectedLanguage: this.getCurrentLanguageFromHtml()
    })
  }

  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Luckiest+Guy|Open+Sans"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />

        <section>
          <section>
            <a>New Local</a>
            <a>View Locals</a>
          </section>
          <section>
            <a>Log Out</a>
          </section>
        </section>

        <div className="main-section">
          {/* <img
            src={homePicture}
            alt="Tim Mossholder on Unsplash"
            height="100%"
          /> */}

          <div className="home-section">
            <div className="resume">
              <h1>MIGO!</h1>
              <p>
                Hi friends! I will help you to search for places where you can
                take free English classes and improve your talking skills.
              </p>
            </div>
            <div className="language-section">
              <div id="google_translate_element" />
            </div>
            <div className="search-city-section">
              <input
                className="text-section"
                type="text"
                placeholder="Enter city or zipcode"
              />
              <Link to={`List/1`}>
                <button className="button-section">Search</button>
              </Link>
            </div>
            <div className="logIn-signUp-section">
              <Link to={`LogIn`}>
                <button className="log-in-button">Log In</button>
              </Link>
              <Link to={`User`}>
                <button className="sign-up-button">Sign Up</button>
              </Link>
            </div>
            {/* DO NOT DELETE IT */}
            {/* <p>{this.state.selectedLanguage}</p>
        <button onClick={this.getCurrentLanguage}>get current language+</button> */}
            {/* DO NOT DELETE IT */}
          </div>
        </div>
      </>
    )
  }
}

export default UserSession
