import React, { PropTypes } from 'react';
import styled from 'styled-components';
import logos from '../common/logos';
import { teams } from '../../scraper/nhl';

const LogoDiv = styled.div`
   background-image: ${props => props.image};
   background-repeat: no-repeat;
   width: 3em;
   height: 2em;

   @media(max-width: 64em) {
      width: 1.5em;
      height: 1em;
   }

   @media(max-width: 30em) {
      width: 1em;
      height: 0.75em;
   }
`;

const Logo = ({ team }) => <LogoDiv image={logos[team]} />;

Logo.propTypes = {
   team: PropTypes.oneOf(Object.keys(teams)).isRequired,
};

export default Logo;
