import PropTypes from 'prop-types'
import React from 'react'

const Game = ({ active, completed, id, period, teams, gameDateLocal, gameTime }) => {
   return (
      <div/>
   )
}

Game.propTypes = {
   active: PropTypes.bool.isRequired,
   completed: PropTypes.bool.isRequired,
   id: PropTypes.number.isRequired,
   period: PropTypes.number.isRequired,
   teams: PropTypes.shape({
      away: PropTypes.shape({
         team: PropTypes.string.isRequired,
         score: PropTypes.number.isRequired,
      }),
      home: PropTypes.shape({
         team: PropTypes.string.isRequired,
         score: PropTypes.number.isRequired,
      }),
   }),
   gameDateLocal: PropTypes.string.isRequired,
   gameTime: PropTypes.string.isRequired,
}

export default Game
