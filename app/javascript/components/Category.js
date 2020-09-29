import React from 'react'
import PropTypes from 'prop-types'

import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'

const Category = props => {
  const update = (item) => {
    const body = JSON.stringify({ item_category: { item_id: item.id, category_id: props.id } })

    fetch(`${props.apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': props.formToken
        },
        body: body,
      }).then((response) => { return response.json() })
        .then((itemCategory) => {
          props.onUpdate(itemCategory)
        })
  }

  const [{ opacity }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => update(item),
    collect: monitor => ({
      opacity: !!monitor.isOver() ? 0.5 : 1
    })
  })

  return(
    <div className="Category" ref={dropRef} style={{ opacity }}>
      { props.text }
    </div>
  )
}

Category.defaultProps = {
  id: 1,
  text: "This",
  apiUrl: 'http://localhost:3000/api/v1/item_categories',
  formtoken: ''
}

Category.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  apiUrl: PropTypes.string,
  formToken: PropTypes.string
}

export default Category