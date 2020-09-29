import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ItemNode from './ItemNode'

const IndexItems = props => {
  const [ items, setItems ] = useState([])

  useEffect(() => {
    fetch(`${props.apiUrl}`)
      .then(res => res.json())
      .then(setItems)
  }, [])

  return(
    <div className="IndexItems">
      { items.map(item => <ItemNode key={item.id} {...item} />) }
    </div>
  )
}

IndexItems.defaultProps = {
  apiUrl: 'http://localhost:3000/api/v1/items'
}

IndexItems.propTypes = {
  apiUrl: PropTypes.string
}

export default IndexItems