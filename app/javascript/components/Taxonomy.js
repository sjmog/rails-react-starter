import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Category from './Category'

const Taxonomy = props => {
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    fetch(`${props.apiUrl}`)
      .then(res => res.json())
      .then(setCategories)
  }, [])

  return(
    <div className="Taxonomy">
      { categories.map(category => <Category key={category.id}
                                             formToken={props.formToken}
                                             onUpdate={props.onUpdateItemCategory}
                                             {...category} />) }
    </div>
  )
}

Taxonomy.defaultProps = {
  formToken: '',
  apiUrl: 'http://localhost:3000/api/v1/categories'
}

Taxonomy.propTypes = {
  formToken: PropTypes.string,
  apiUrl: PropTypes.string,
  onUpdateItemCategory: PropTypes.func
}

export default Taxonomy