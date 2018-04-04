import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import logos from '../common/logos'
import { teams } from '../../modules/nhl'

const LogoDiv = styled.img`
   width: ${props => props.full ? '100%' : '3em'};
   padding-top: 0;
`

const Logo = ({ dark, team, full }) => (
   <LogoDiv className="logo" src={dark ? logos.dark[team] : logos.light[team]} full={full} />
)

Logo.propTypes = {
   dark: PropTypes.bool,
   full: PropTypes.bool,
   team: PropTypes.oneOf(Object.keys(teams)).isRequired,
}

Logo.defaultProps = {
   dark: false,
   full: false,
}

export default Logo
