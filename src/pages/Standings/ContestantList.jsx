import PropTypes from 'prop-types'
import React from 'react'
import FlexRow from '../../components/FlexRow'
import Contestant from './Contestant'

const ContestantList = ({ contestants, maxPoints, hideEliminated }) => (
  <FlexRow>
    {contestants.map(contestant => (
      <Contestant
        key={`${contestant.firstName} ${contestant.lastName}`}
        maxPoints={maxPoints}
        hideEliminated={hideEliminated}
        {...contestant}
      />
    ))}
  </FlexRow>
)

ContestantList.propTypes = {
  contestants: PropTypes.arrayOf(PropTypes.object).isRequired,
  maxPoints: PropTypes.number.isRequired,
}

export default ContestantList
