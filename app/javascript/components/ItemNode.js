import React from 'react'
import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

const ItemNode = props => (
  <Link to={`/items/${ props.id }`}>{ props.text }</Link>
)

ItemNode.defaultProps = {
  id: 1,
  text: 'Java'
}

ItemNode.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string
}

export default ItemNode