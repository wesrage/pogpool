import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { player as playerPropType } from '../../common/propTypes';
import PlayerTile from './PlayerTile';

const Root = styled.div`
   align-items: center;
   display: flex;
   width: 100%;
`;

export default class PlayerGroup extends Component {
   static propTypes = {
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
