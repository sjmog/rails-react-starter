// The main component that is rendered to the * route

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Index from './Index'

const App = props => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/models/:id">
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

App.defaultProps = {
  formToken: ''
}

App.propTypes = {
  formToken: PropTypes.string
}

export default App