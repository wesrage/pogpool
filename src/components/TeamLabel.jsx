import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import bootstrap from '../style/bootstrap/bootstrap.scss'
import nhlStyles from '../style/nhl.scss'
import styles from '../style/standings.scss'

const TeamLabel = ({ team }) => (
   <span
     className={classnames([
         [bootstrap.label],
         [nhlStyles.team],
         [nhlStyles[team]],
         [styles.teamLabel],
     ])}
   >
      {team}
   </span>
)

TeamLabel.propTypes = {
   out: PropTypes.bool,
   team: PropTypes.string.isRequired,
}

TeamLabel.defaultProps = {
   out: false,
}

export default TeamLabel
