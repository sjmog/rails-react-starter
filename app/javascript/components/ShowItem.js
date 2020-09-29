import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Taxonomy from './Taxonomy'
import ItemList from './ItemList'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const ShowItem = props => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="ShowItem">
        <Taxonomy formToken={props.formToken} />
        <ItemList items={props.items} />
      </div>
    </DndProvider>
  )
}

ShowItem.defaultProps = {
  items: [ { id: 1, name: 'Java' } ],
  formToken: ''
}

ShowItem.propTypes = {
  items: PropTypes.array,
  formToken: PropTypes.string
}

export default ShowItem