import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Taxonomy from './Taxonomy'
import ItemList from './ItemList'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = props => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Taxonomy formToken={props.formToken} />
        <ItemList items={props.items} />
      </div>
    </DndProvider>
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