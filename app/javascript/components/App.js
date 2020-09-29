import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ShowItem from './ShowItem'

const App = props => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <ShowItem formToken={props.formToken} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

App.defaultProps = {
  items: [ { id: 1, name: 'Java' } ],
  formToken: ''
}

App.propTypes = {
  items: PropTypes.array,
  formToken: PropTypes.string
}

export default App