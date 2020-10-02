import React from 'react'
import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

const CategoryNode = props => (
  <Link to={`/items/${ props.id }`}>{ props.text }</Link>
)

CategoryNode.defaultProps = {
  id: 1,
  text: 'Java'
}

CategoryNode.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string
}

export default CategoryNode