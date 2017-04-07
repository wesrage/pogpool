import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import { teams } from '../../../scraper/nhl';
import colors from '../../common/colors';

const TeamRoot = styled.div`
   background-color: ${props => props.color};
   border: 1px solid ${props => props.color};
   color: #fff;
   display: flex;
   align-items: center;
   height: 3em;
   line-height: 3em;
   flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
   border-bottom: 1px solid #fff;
`;

const Name = styled.div`
   padding: 0.25em 0.5em;
`;

const Seed = styled.div`
   font-weight: bold;
   text-align: center;
   width: 2em;
`;

export default class Team extends Component {
   static propTypes = {
      id: PropTypes.oneOf(Object.keys(teams)).isRequired,
      seed: PropTypes.number.isRequired,
      right: PropTypes.bool,
   };

   static defaultProps = {
      right: false,
   };

   render() {
      const { id, seed, right } = this.props;
      const color = colors[id][0];
      return (
         <TeamRoot color={color} right={right}>
            <Seed color={color} right={right}>{seed}</Seed>
            <Logo team={id} />
            <Name>{teams[id].fullName}</Name>
         </TeamRoot>
      );
   }
}
