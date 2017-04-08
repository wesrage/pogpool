import React, { PropTypes } from 'react';
import styled from 'styled-components';
import logos from '../common/logos';
import { teams } from '../../scraper/nhl';

const LogoDiv = styled.div`
   background-image: ${props => props.image};
   background-repeat: no-repeat;
   background-position: center;
   width: ${props => props.full ? '100%' : '3em'};
   height: ${props => props.full ? '100%' : '2em'};
`;

const Logo = ({ dark, team, full }) => (
   <LogoDiv className="logo" image={dark ? logos.dark[team] : logos.light[team]} full={full} />
);

Logo.propTypes = {
   dark: PropTypes.bool,
   full: PropTypes.bool,
   team: PropTypes.oneOf(Object.keys(teams)).isRequired,
};

Logo.defaultProps = {
   dark: false,
   full: false,
};

export default Logo;
