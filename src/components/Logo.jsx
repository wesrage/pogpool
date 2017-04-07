import React, { PropTypes } from 'react';
import styled from 'styled-components';
import logos from '../common/logos';
import { teams } from '../../scraper/nhl';

const LogoDiv = styled.div`
   background-image: ${props => props.image};
   background-repeat: no-repeat;
   width: 50px;
   height: 30px;
`;

const Logo = ({ team }) => <LogoDiv image={logos[team]} />;

Logo.propTypes = {
   team: PropTypes.oneOf(Object.keys(teams)).isRequired,
};

export default Logo;
