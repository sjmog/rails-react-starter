import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

const IndexGames = props => {
  const [ games, setGames ] = useState([])

  useEffect(() => {
    fetch(`${props.apiUrl}`)
      .then(res => res.json())
      .then(setGames)
  }, [])

  return(
    <div className="IndexGames">
      { games.map(game => <Link key={game.id} to={`/games/${ game.id }`}>{ game.id }</Link>) }
    </div>
  )
}

IndexGames.defaultProps = {
  apiUrl: 'http://localhost:3000/api/v1/games'
}

IndexGames.propTypes = {
  apiUrl: PropTypes.string
}

export default IndexGames