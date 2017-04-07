import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
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
   width: 80%;
   margin: 0 auto;
   justify-content: space-around;
   filter: ${props => props.otherSelected ? 'grayscale(100%)' : 'none'};
   opacity: ${props => props.selected ? 1 : 0.8};
   cursor: pointer;
   box-shadow: ${props => props.selected ? '3px 3px 15px #888' : '1px 1px 5px #888'};
   transform: scale(${props => props.selected ? 1.05 : 1});
   transition: all 200ms;
   border-radius: 3px;
   position: relative;

   &:hover {
      opacity: 1;
      transform: scale(1.05);
      box-shadow: 3px 3px 15px #888;
      filter: none;
   }
`;

const Info = styled.div`
   background-color: ${props => props.color};
   border-top: 1px solid #fff;
   display: flex;
   align-items: center;
   height: 2.5em;
   border-radius: 0 0 3px 3px;
`;

const Team = styled.div`
   padding-left: 0.5em;
`;

const Name = styled.div`
   color: #fff;
   font-size: 0.7em;
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

const selectedAnimation = keyframes`
   from {
      width: 0;
      height: 0;
   }

   to {
      width: 2em;
      height: 2em;
   }
`;

const SelectedRoot = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   height: 2em;
   width: 2em;
   background-color: #4885ed;
   display: flex;
   align-items: center;
   justify-content: center;
   animation: ${selectedAnimation} 100ms;
`;

const AnimatedCheck = styled(Done)`
   animation: ${checkAnimation} 300ms;
`;

const Selected = () => (
   <SelectedRoot>
      <AnimatedCheck size="1.5em" color="#fff" />
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
            <Info color={colors[team][0]}>
               <Team>
                  <Logo team={team} />
               </Team>
               <Name>{lastName.toUpperCase()}, {firstName}</Name>
            </Info>
            {selected && <Selected />}
         </Tile>
      );
   }
}
