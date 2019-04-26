import PropTypes from 'prop-types'
import React from 'react'
import { getPicksByPosition } from '../../../api/services/group.service'
import Column from '../../components/Column'
import PickRow from './PickRow'
import style from '../../style/standings.scss'

const renderSkaterRow = maxPoints => pick =>
  renderPickRow(
    pick,
    maxPoints,
    skater => `${skater.firstName} ${skater.lastName}`,
  )

const renderGoalieRow = maxPoints => pick =>
  renderPickRow(
    pick,
    maxPoints,
    team => `${team.goalies.map(goalie => goalie.lastName).join('/')}`,
  )

const renderTeamRow = maxPoints => pick =>
  pick.pick && renderPickRow(
    pick,
    maxPoints,
    team => `${team.locationName} ${team.teamName}`,
  )

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

const Contestant = ({
  firstName,
  lastName,
  picks,
  points,
  maxPoints,
  hideEliminated,
}) => {
  const picksToShow = {}
  for (const groupId in picks) {
    if (!hideEliminated || !picks[groupId].out) {
      picksToShow[groupId] = picks[groupId]
    }
  }
  return (
    <div style={{ marginBottom: '2em', minWidth: 350 }}>
      <div id={firstName + lastName} className={style.nameRow}>
        <span>
          {firstName} {lastName}
        </span>
        <div style={{ float: 'right' }}>{points}</div>
      </div>
      {getPicksByPosition(picksToShow, 'f').map(renderSkaterRow(maxPoints))}
      <br />
      {getPicksByPosition(picksToShow, 'd').map(renderSkaterRow(maxPoints))}
      <br />
      {getPicksByPosition(picksToShow, 't').map(renderGoalieRow(maxPoints))}
      <br />
      {renderTeamRow(maxPoints)({
        groupName: 'sc',
        pick: picksToShow.sc,
      })}
    </div>
  )
}

Contestant.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  picks: PropTypes.shape().isRequired,
  points: PropTypes.number.isRequired,
  maxPoints: PropTypes.number.isRequired,
}

export default Contestant
