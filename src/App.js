import React, { Component } from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import VolunteerRegistration from './components/VolunteerRegistration'
import CommentRegistration from './components/CommentRegistration'
import LocalDetail from './components/LocalDetail'
import UserRegistration from './components/UserRegistration'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/Volunteer/:idLocal"
              component={VolunteerRegistration}
            />
            <Route
              exact
              path="/Comment/:idLocal"
              component={CommentRegistration}
            />
            <Route exact path="/Detail/:idLocal" component={LocalDetail} />
            <Router exact path="/User" component={UserRegistration} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
