import PropTypes from 'prop-types'
import React from 'react'
import FlexRow from '../../components/FlexRow'
import TeamPie from './TeamPie'
import SpinnerContainer from '../../components/SpinnerContainer'

const transformPicks = picks =>
  Object.keys(picks).reduce((acc, groupName) => {
    const pick = picks[groupName]
    const team = acc[pick.team || pick.id]
    const teamPoints = pick.points + ((team && team.points) || 0)
    const teamPicks = 1 + ((team && team.picks) || 0)
    return {
      ...acc,
      [pick.team || pick.id]: {
        points: teamPoints,
        picks: teamPicks,
      },
    }
  }, {})

const TeamPieList = ({ contestants, maxPoints, loading = false }) => (
  <SpinnerContainer loading={loading}>
    {() => (
      <FlexRow>
        {contestants.map(contestant => (
          <TeamPie
            key={`${contestant.firstName} ${contestant.lastName}`}
            contestantName={`${contestant.firstName} ${contestant.lastName}`}
            data={transformPicks(contestant.picks)}
            maxPoints={maxPoints}
            radius={100}
          />
        ))}
      </FlexRow>
    )}
  </SpinnerContainer>
)

TeamPieList.propTypes = {
  contestants: PropTypes.arrayOf(PropTypes.object).isRequired,
  maxPoints: PropTypes.number.isRequired,
  loading: PropTypes.bool,
}

export default TeamPieList
