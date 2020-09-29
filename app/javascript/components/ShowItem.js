import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Taxonomy from './Taxonomy'
import ItemList from './ItemList'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { useParams } from 'react-router-dom'

const ShowItem = props => {
  const NULL_ITEM = { id: 0, text: "Loading..." }

  const [ item, setItem ] = useState(NULL_ITEM)
  const { id } = useParams();

  useEffect(() => {
    fetch(`${props.apiUrl}/${id}`)
      .then(res => res.json())
      .then(setItem)
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="ShowItem">
        <Taxonomy formToken={props.formToken} />
        <ItemList items={[item]} />
      </div>
    </DndProvider>
  )
}

ShowItem.defaultProps = {
  apiUrl: 'http://localhost:3000/api/v1/items',
  formToken: ''
}

ShowItem.propTypes = {
  apiUrl: PropTypes.string,
  formToken: PropTypes.string
}

export default ShowItem