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
        .then((itemCategory)=>{
          console.log(itemCategory)
        })
  }

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => update(item),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  })

  return(
    <div className="Category" ref={drop}>
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