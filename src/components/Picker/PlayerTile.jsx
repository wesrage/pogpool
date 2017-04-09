import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import Logo from '../Logo';
import Tile from './Tile';
import colors from '../../common/colors';
import { player as playerPropType } from '../../common/propTypes';

const Headshot = styled.img`
   width: 100%;
`;

const TileWrapper = styled.div`
   width: 15vw;

   .logo {
      @media(max-width: 64em) {
         width: 1.5em;
         height: 1em;
      }

      @media(max-width: 45em) {
         padding: 0;
      }

      @media(max-width: 30em) {
         width: 1em;
         left: -0.25em;
      }
   }
`;

const Info = styled.div`
   background-color: ${props => props.color};
   border-top: 1px solid #fff;
   display: flex;
   align-items: center;
   height: 2.5em;
   border-radius: 0 0 0.125em 0.125em;

   @media(max-width: 64em) {
      height: 1.5em;
   }

   @media(max-width: 45em) {
      padding: 0 0.5em;
      text-align: center;
   }

   @media(max-width: 30em) {
      padding: 0 0.25em;
   }
`;

const Team = styled.div`
   padding-left: 0.25em;
`;

const AbsoluteLogoWrapper = styled.div`
   position: absolute;
   top: 0.25em;
   left: 0.25em;

   @media(max-width: 45em) {
       top: 0.125em;
       left: 0.125em;
   }

   @media(max-width: 30em) {
      left: 0;
      top: 0;
   }
`;

const Name = styled.span`
   color: #fff;
   font-size: 1em;
   padding: 0 0.5em;
   width: 100%;

   @media(max-width: 90em) {
      font-size: 0.8em;
   }

   @media(max-width: 80em) {
      font-size: 0.7em;
   }

   @media(max-width: 64em) {
      font-size: 0.6em;
   }

   @media(max-width: 45em) {
      font-size: 0.6em;
      text-align: center;
   }

   @media(max-width: 30em) {
      font-size: 0.5em;
   }

   @media(max-width: 24em) {
      font-size: 0.45em;
   }
`;

export default class PlayerTile extends Component {
   static propTypes = {
      ...playerPropType,
      onSelect: PropTypes.func.isRequired,
      selected: PropTypes.bool,
      otherSelected: PropTypes.bool,
   };
   static defaultProps = {
      selected: false,
      otherSelected: false,
   };

   render() {
      const { id, firstName, lastName, team, selected, otherSelected } = this.props;
      const fullDisplayName = `${firstName} ${lastName}`;
      const headshotImageUrl = `https://nhl.bamcontent.com/images/headshots/current/168x168/${id}@2x.jpg`;
      return (
         <TileWrapper>
            <Tile
              selected={selected}
              otherSelected={otherSelected}
              onClick={() => this.props.onSelect(id)}
            >
               <Headshot alt={`${fullDisplayName} Headshot`} src={headshotImageUrl} />
               <Media query="(max-width: 45em)">
                  {matches =>
                     matches &&
                     <AbsoluteLogoWrapper><Logo team={team} dark /></AbsoluteLogoWrapper>}
               </Media>
               <Info color={colors[team][0]}>
                  <Media query="(max-width: 45em)">
                     {matches =>
                        !matches &&
                        <Team>
                           <Logo team={team} />
                        </Team>}
                  </Media>
                  <Name>{fullDisplayName}</Name>
               </Info>
            </Tile>
         </TileWrapper>
      );
   }
}
