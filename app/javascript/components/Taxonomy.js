import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Stage from './Stage'

const Taxonomy = props => {
  const [ stages, setStages ] = useState([])

  useEffect(() => {
    fetch(`${props.apiUrl}`)
      .then(res => res.json())
      .then(setStages)
  }, [])

  return(
    <div className="Taxonomy">
      { stages.map(stage => <Stage key={stage.id} formToken={props.formToken} {...stage} />) }
    </div>
  )
}

Taxonomy.defaultProps = {
  formToken: '',
  apiUrl: 'http://localhost:3000/api/v1/stages'
}

Taxonomy.propTypes = {
  formToken: PropTypes.string,
  apiUrl: PropTypes.string
}

export default Taxonomy