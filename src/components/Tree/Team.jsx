import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import Logo from '../Logo';
import { teams } from '../../../scraper/nhl';
import colors from '../../common/colors';

const TeamRoot = styled.div`
   background-color: ${props => props.color};
   color: #fff;
   display: flex;
   align-items: center;
   height: 2em;
   line-height: 2em;
   flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
   border-bottom: 1px solid #fff;
   padding-top: 0.5em;
   padding-bottom: 0.5em;
   padding-right: ${props => props.right ? 0 : '1em'};
   padding-left: ${props => props.right ? '1em' : 0};
   white-space: nowrap;
   width: 18em;
   max-width: 18em;

   @media(max-width: 45em) {
      width: 12em;
      max-width: 12em;
   }

   @media(max-width: 28em) {
      width: 6em;
      max-width: 6em;
   }
`;

const Name = styled.div`
   padding: 0.25em 0.5em;
`;

const Seed = styled.div`
   font-weight: bold;
   text-align: center;
   width: 2.5em;
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
      const displayName = (
         <Media query="(max-width: 45em)">
            {matches =>
               matches ? <span>{teams[id].locationName}</span> : <span>{teams[id].fullName}</span>}
         </Media>
      );
      const color = colors[id][0];
      return (
         <TeamRoot color={color} right={right}>
            <Seed color={color} right={right}>{seed}</Seed>
            <Logo team={id} />
            <Media query="(max-width: 28em)">
               {matches => matches ? null : <Name>{displayName}</Name>}
            </Media>
         </TeamRoot>
      );
   }
}
