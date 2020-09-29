import React from 'react'
import PropTypes from 'prop-types'

import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

const Item = props => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: ItemTypes.CARD, id: props.id, text: props.text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })

  return(
    <div ref={dragRef} style={{ opacity }} className="Item">
      {props.text}
    </div>
  )
}

Item.defaultProps = {
  id: 1,
  text: "Java"
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string
}

export default Item