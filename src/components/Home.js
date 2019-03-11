import React, { Component } from 'react'
import LocalList from './LocalList'
import { Link } from 'react-router-dom'

class Home extends Component {
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
        <div className="home-section">
          <div className="resume">
            <h1>MIGO!</h1>
            <p>
              Hi friends! I will help you to search for places where you can
              take free English classes and improve your talking skills.
            </p>
          </div>
          <div className="language-section">
            <p className="language-word">Language</p>
            <div id="google_translate_element" />
          </div>
          <div className="search-city-section">
            <p className="city-section">City:</p>
            <input className="text-section" type="text" />
            <button className="button-section">Search</button>
          </div>
          <div className="logIn-signUp-section">
            <Link to={`LogIn`}>
              <p>Log In</p>
            </Link>
            <Link to={`User`}>
              <p>Sign Up</p>
            </Link>
          </div>
          {/* DO NOT DELETE IT */}
          {/* <p>{this.state.selectedLanguage}</p>
        <button onClick={this.getCurrentLanguage}>get current language+</button> */}
          {/* DO NOT DELETE IT */}
        </div>
        <LocalList />
      </>
    )
  }
}

export default Home
