import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import CategoryNode from './CategoryNode'

const IndexCategories = props => {
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    fetch(`${props.apiUrl}`)
      .then(res => res.json())
      .then(setCategories)
  }, [])

  return(
    <div className="IndexCategories">
      { categories.map(category => <CategoryNode key={category.id} {...category} />) }
    </div>
  )
}

IndexCategories.defaultProps = {
  apiUrl: 'http://localhost:3000/api/v1/categories'
}

IndexCategories.propTypes = {
  apiUrl: PropTypes.string
}

export default IndexCategories