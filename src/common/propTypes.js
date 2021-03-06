import PropTypes from 'prop-types'
import { teams } from '../../modules/nhl'

export const player = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
}

export const team = {
  id: PropTypes.oneOf(Object.keys(teams)).isRequired,
  fullName: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
}
