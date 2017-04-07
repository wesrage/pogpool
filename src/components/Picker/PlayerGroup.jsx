import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { player as playerPropType } from '../../common/propTypes';
import PlayerTile from './PlayerTile';

const Root = styled.div`
   align-items: center;
   display: flex;
   width: 100%;

   &:not(:last-child) {
      padding-bottom: 2em;
   }
`;

const GroupId = styled.div`
   color: #aaa;
   width: 2em;
   font-size: 2em;
   font-weight: bold;
   text-align: center;
   text-transform: uppercase;

   @media(max-width: 64em) {
      font-size: 1.5em;
      width: 1.5em;
   }

   @media(max-width: 45em) {
      font-size: 1em;
      width: 1em;
   }

   @media(max-width: 30em) {
      font-size: 0.75em;
      width: 1em;
      margin-left: -0.5em;
   }
`;

export default class PlayerGroup extends Component {
   static propTypes = {
      id: PropTypes.string.isRequired,
      selection: PropTypes.number,
      players: PropTypes.arrayOf(PropTypes.shape(playerPropType)).isRequired,
      onSelect: PropTypes.func.isRequired,
   };

   static defaultProps = {
      selection: null,
   };

   render() {
      return (
         <Root>
            {/* <GroupId>{this.props.id}</GroupId> */}
            {this.props.players.map(player => {
               const selected = player.id === this.props.selection;
               return (
                  <div key={player.id}>
                     <PlayerTile
                       {...player}
                       onSelect={this.props.onSelect}
                       selected={selected}
                       otherSelected={this.props.selection !== null && !selected}
                     />
                  </div>
               );
            })}
         </Root>
      );
   }
}