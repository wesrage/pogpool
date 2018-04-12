import PropTypes from 'prop-types'
import React from 'react';
import classnames from 'classnames';
import layout from '../../style/layout.scss';
import style from '../../style/standings.scss';

const TeamPieInfo = ({ team, points, picks }) => (
   <div className={classnames(style.pieInfo, layout.center, layout.textCenter)}>
      <div className={classnames(style.pieInfoTeam)}>
         {team}
      </div>
      <div className={classnames(style.pieInfoStats)}>
         <span>{points} pt{points !== 1 && 's'}</span>
         <span> / </span>
         <span>{picks} pick{picks !== 1 && 's'}</span>
      </div>
   </div>
);

TeamPieInfo.propTypes = {
   team: PropTypes.string.isRequired,
   points: PropTypes.number.isRequired,
   picks: PropTypes.number.isRequired,
};

export default TeamPieInfo;
