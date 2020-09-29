import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ShowItem from './ShowItem'

const App = props => {
  return (
    <div className="App">
      <ShowItem formToken={props.formToken} />
    </div>
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