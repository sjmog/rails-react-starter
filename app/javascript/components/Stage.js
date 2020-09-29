import React from 'react'
import PropTypes from 'prop-types'

import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'

const Stage = props => {
  const update = (item) => {
    const body = JSON.stringify({ item_stage: { item_id: item.id, stage_id: props.id } })

    fetch(`${props.apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': props.formToken
        },
        body: body,
      }).then((response) => { return response.json() })
        .then((itemStage)=>{
          console.log(itemStage)
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
    <div className="Stage" ref={drop}>
      { props.text }
    </div>
  )
}

Stage.defaultProps = {
  id: 1,
  text: "Remember",
  apiUrl: 'http://localhost:3000/api/v1/item_stages',
  formtoken: ''
}

Stage.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  apiUrl: PropTypes.string,
  formToken: PropTypes.string
}

export default Stage