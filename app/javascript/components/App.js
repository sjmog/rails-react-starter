import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import RunGame from './RunGame'
import Main from './Main'

const App = props => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/games/:id">
            <RunGame formToken={props.formToken} />
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