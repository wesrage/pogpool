import React, { PropTypes } from 'react';
import styled from 'styled-components';
import logos from '../common/logos';
import { teams } from '../../scraper/nhl';

const LogoDiv = styled.div`
   background-image: ${props => props.image};
   background-repeat: no-repeat;
   width: 3em;
   height: 2em;
`;

const Logo = ({ dark, team }) => <LogoDiv className="logo" image={dark ? logos.dark[team] : logos.light[team]} />;

Logo.propTypes = {
   dark: PropTypes.bool,
   team: PropTypes.oneOf(Object.keys(teams)).isRequired,
};

Logo.defaultProps = {
   dark: false,
};

export default Logo;
