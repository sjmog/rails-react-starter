import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemList = props => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${props.apiUrl}`)
      .then(res => res.json())
      .then(setItems)
  }, [])

  return(
    <div className="ItemList">
      { items.map(item => <Item key={item.id} {...item} />) }
    </div>
  )
}

ItemList.defaultProps = {
  apiUrl: 'http://localhost:3000/api/v1/items'
}

ItemList.propTypes = {
  items: PropTypes.array,
  apiUrl: PropTypes.string
}

export default ItemList