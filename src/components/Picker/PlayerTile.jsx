import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import Media from 'react-media';
import Done from 'react-icons/lib/md/done';
import Logo from '../Logo';
import colors from '../../common/colors';
import { player as playerPropType } from '../../common/propTypes';

const Headshot = styled.img`
   width: 100%;
`;

const Tile = styled.div`
   display: flex;
   flex-direction: column;
   width: calc(100% - 2em);
   margin: 0 auto;
   justify-content: space-around;
   filter: ${props => props.otherSelected ? 'grayscale(100%)' : 'none'};
   opacity: ${props => props.selected ? 1 : 0.8};
   cursor: pointer;
   box-shadow: ${props => props.selected ? '3px 3px 15px #888' : '1px 1px 5px #888'};
   transform: scale(${props => props.selected ? 1.05 : props.otherSelected ? 0.9 : 1});
   transition: all 200ms;
   border-radius: 0.25em;
   position: relative;

   &:hover {
      opacity: 1;
      transform: scale(1.05);
      box-shadow: 0.25em 0.25em 1em #888;
      filter: none;
   }

   @media(max-width: 64em) {
      width: calc(100% - 1em);
   }

   @media(max-width: 45em) {
      width: calc(100% - 0.5em);
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

   @media(max-width: 30em) {
       top: 0.125em;
       left: 0;
   }
`;

const Name = styled.span`
   color: #fff;
   font-size: 1em;
   padding: 0 0.25em;
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

const checkAnimation = keyframes`
   0% {
      transform: scale(0);
   }

   80% {
      transform: scale(1.2);
   }

   100% {
      transform: scale(1);
   }
`;

const selectedAnimationLarge = keyframes`
   from {
      width: 0;
      height: 0;
   }

   to {
      width: 2em;
      height: 2em;
   }
`;

const selectedAnimationMedium = keyframes`
   from {
      width: 0;
      height: 0;
   }

   to {
      width: 1.5em;
      height: 1.5em;
   }
`;

const selectedAnimationSmall = keyframes`
   from {
      width: 0;
      height: 0;
   }

   to {
      width: 1em;
      height: 1em;
   }
`;

const SelectedRoot = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   height: 2em;
   width: 2em;
   animation: ${selectedAnimationLarge} 100ms;
   background-color: #4885ed;
   display: flex;
   align-items: center;
   justify-content: center;

   @media(max-width: 64em) {
      height: 1.5em;
      width: 1.5em;
      animation: ${selectedAnimationMedium} 100ms;
   }

   @media(max-width: 30em) {
      height: 1em;
      width: 1em;
      animation: ${selectedAnimationSmall} 100ms;
   }
`;

const AnimatedCheck = styled(Done)`
   height: 1.5em;
   width: 1.5em;
   animation: ${checkAnimation} 300ms;

   @media(max-width: 64em) {
      height: 1em;
      width: 1em;
   }

   @media(max-width: 30em) {
      height: 0.75em;
      width: 0.75em;
   }
`;

const Selected = () => (
   <SelectedRoot>
      <AnimatedCheck color="#fff" />
   </SelectedRoot>
);

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
      // const fullName = `${lastName.toUpperCase()}, ${firstName}`;
      const fullDisplayName = `${firstName} ${lastName}`;
      const headshotImageUrl = `https://nhl.bamcontent.com/images/headshots/current/168x168/${id}@2x.jpg`;
      return (
         <Tile
           selected={selected}
           otherSelected={otherSelected}
           onClick={() => this.props.onSelect(id)}
         >
            <Headshot alt={`${fullDisplayName} Headshot`} src={headshotImageUrl} />
            <Media query="(max-width: 45em)">
               {matches =>
                  matches && <AbsoluteLogoWrapper><Logo team={team} dark /></AbsoluteLogoWrapper>}
            </Media>
            <Info color={colors[team][0]}>
               <Media query="(max-width: 45em)">
                  {matches =>
                     !matches &&
                     <Team>
                        <Logo team={team} />
                     </Team>}
               </Media>
               {/* <Name>{lastName.toUpperCase()}, {firstName}</Name> */}
               <Name>{fullDisplayName}</Name>
            </Info>
            {selected && <Selected />}
         </Tile>
      );
   }
}
