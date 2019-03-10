import React, { Component } from 'react'
import LocalList from './LocalList'
import LocalRegistration from './LocalRegistration'
import VolunteerRegistration from './VolunteerRegistration'
import Comment from './CommentRegistration'
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
          <h1>MIGO!</h1>
          <div className="language-section">
            <p className="language-word">Language</p>
            <div id="google_translate_element" />
          </div>
          <div className="search-city-section">
            <p className="city-section">City</p>
            <input className="text-section" type="text" />
            <button className="button-section">Search</button>
          </div>
          <div className="registration-section">
            <a src="#">New Local</a>
          </div>
          {/* DO NOT DELETE IT */}
          {/* <p>{this.state.selectedLanguage}</p>
        <button onClick={this.getCurrentLanguage}>get current language+</button> */}
          {/* DO NOT DELETE IT */}
        </div>
        <LocalList />
        <LocalRegistration />
        <VolunteerRegistration />
        <Comment />
      </>
    )
  }
}

export default Home
