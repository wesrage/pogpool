import PropTypes from 'prop-types'
import React from 'react'
import { getPicksByPosition } from '../../../api/services/group-service'
import Column from '../Column'
import PickRow from './PickRow'
import style from '../../style/standings.scss'

const renderSkaterRow = maxPoints =>
   pick => renderPickRow(pick, maxPoints, skater => `${skater.firstName} ${skater.lastName}`)

const renderGoalieRow = maxPoints =>
   pick =>
      renderPickRow(
         pick,
         maxPoints,
         team => `${team.goalies.map(goalie => goalie.lastName).join('/')}`,
      )

const renderTeamRow = maxPoints =>
   pick => renderPickRow(pick, maxPoints, team => `${team.locationName} ${team.teamName}`)

const renderPickRow = (item, maxPoints, nameRenderFunction) => (
   <PickRow
     key={item.groupName}
     groupName={item.groupName}
     displayName={nameRenderFunction(item.pick)}
     team={item.pick.team || item.pick.id}
     points={item.pick.points}
     best={item.pick.best}
     worst={item.pick.worst}
     out={item.pick.out}
     final={item.pick.final}
     maxPoints={maxPoints}
   />
)

const Contestant = ({ firstName, lastName, picks, points, maxPoints }) => (
   <Column xs={12} md={6} lg={4} style={{ marginBottom: '2em' }}>
      <div id={firstName + lastName} className={style.nameRow}>
         <span>{firstName} {lastName}</span>
         <div style={{ float: 'right' }}>{points}</div>
      </div>
      {getPicksByPosition(picks, 'f').map(renderSkaterRow(maxPoints))}
      <br />
      {getPicksByPosition(picks, 'd').map(renderSkaterRow(maxPoints))}
      <br />
      {getPicksByPosition(picks, 't').map(renderGoalieRow(maxPoints))}
      <br />
      {renderTeamRow(maxPoints)({
         groupName: 'sc',
         pick: picks.sc,
      })}
   </Column>
)

Contestant.propTypes = {
   firstName: PropTypes.string.isRequired,
   lastName: PropTypes.string.isRequired,
   picks: PropTypes.shape().isRequired,
   points: PropTypes.number.isRequired,
   maxPoints: PropTypes.number.isRequired,
}

export default Contestant
