import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemList = props => {
  return(
    <div className="ItemList">
      { props.items.map(item => <Item key={item.id} {...item} />) }
    </div>
  )
}

ItemList.defaultProps = {
  items: []
}

ItemList.propTypes = {
  items: PropTypes.array
}

export default ItemList