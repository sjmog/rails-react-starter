import React from 'react'
import PropTypes from 'prop-types'

import IndexCategories from './IndexCategories'
import IndexGames from './IndexGames'

const Main = props => {
  return(
    <div className="Main">
      <IndexCategories />
      <IndexGames />
    </div>
  )
}

Main.defaultProps = {
}

Main.propTypes = {
}

export default Main