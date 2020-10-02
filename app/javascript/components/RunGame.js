import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Taxonomy from './Taxonomy'
import ItemList from './ItemList'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { useParams } from 'react-router-dom'

import { shuffle } from './Utils'

const RunGame = props => {
  const NULL_ITEM = { id: 0, text: "Loading..." }

  const [items, setItems] = useState([NULL_ITEM])
  const [ currentItem, setCurrentItem ] = useState(items[0])
  const { id } = useParams();

  const setupItems = () => {
    fetch(`${props.apiUrl}/games/${id}/items`)
      .then(res => res.json())
      .then(items => setItems(shuffle(items)))
  }

  const nextItem = (_itemCategory) => {
    if(items.indexOf(currentItem) === items.length - 1) {
      setupItems();
    } else {
      setCurrentItem(items[items.indexOf(currentItem) + 1])
    }
  }

  useEffect(() => {
    setupItems()
  }, [])

  useEffect(() => {
    setCurrentItem(items[0])
  }, [items])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="RunGame">
        <Taxonomy 
          formToken={props.formToken} 
          onUpdateItemCategory={nextItem} />
        <ItemList items={[currentItem]} />
      </div>
    </DndProvider>
  )
}

RunGame.defaultProps = {
  apiUrl: 'http://localhost:3000/api/v1',
  formToken: ''
}

RunGame.propTypes = {
  apiUrl: PropTypes.string,
  formToken: PropTypes.string
}

export default RunGame